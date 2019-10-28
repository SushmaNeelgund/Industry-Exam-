import { Component, OnInit, ViewChild } from "@angular/core";
// import { NgbModal, ModalDismissReasons, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Employee } from "../employee";
import { EmployeedataService } from "../employeedata.service";
import { MatTableDataSource, MatMenuTrigger, MatPaginator, MatDialog,  } from "@angular/material";
import { ToastrService } from "ngx-toastr";
import { ConfirmationDialogService } from '../confirmation-dialog.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatMenuTrigger, { static: true })
  contextMenu: MatMenuTrigger;

  displayedColumns: string[] = ["select","id", "name", "description"];
  data = Object.assign( Employee);

  closeResult: string;
  kb: FormGroup;
  selectedEmployeeOption: string;
  dataSource = new MatTableDataSource<Employee>();
  arr: Employee[] = [];
  id: number;
  tableForm:FormGroup;
  name: string;
  description: string;
  updatedItem: string;
  // result:string='';
  modalReference: any;
  selection = new SelectionModel<Employee>(true, []);

  constructor(
    public dialog: MatDialog,
    private fb:FormBuilder,
    private confirmationDialogService: ConfirmationDialogService,
    // public dialog: MatDialog,
    private modalService: BsModalService,
    private _data: EmployeedataService,
    private toastr: ToastrService,
    private modalref: BsModalRef
  ) {}


  ngOnInit() {

    this.kb=this.fb.group({
      id:new FormControl(),
      name:new FormControl(),
      description:new FormControl()
    });
    this.fetchData();

  }

  fetchData(){
    this._data.getAllEmployees().subscribe((data: Employee[]) => {
      this.arr = data;
      this.dataSource = new MatTableDataSource<Employee>(this.arr);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmployeeslist()
  {
    this._data.getAllEmployees().subscribe((data: Employee[]) => {
      if(data != undefined)
      {
        this.arr = data;
        this.dataSource = new MatTableDataSource<Employee>(this.arr);
        this.toastr.success("successfully loaded.");
      }
      else{
        this.arr = [];
        this.toastr.error("sorry something went wrong.");
      }

    });
  }
  contextMenuPosition = { x: "0px", y: "0px" };

  onContextMenu(event: MouseEvent, item: Employee) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { item: item };
    this.contextMenu.openMenu();
  }

  onContextMenuDelete(item: Employee) {
    console.log("id:", item.id);
    this._data.deleteEmployee(item.id).subscribe(
      (data: any) => {
      if(data)
      {
        this.toastr.success("successfully deleted.");
        this.getEmployeeslist();
      }
      else{
        this.toastr.error("failed.");
      }
  }
    );
    if(confirm("Are you sure to delete ")) {
      console.log("Implement delete functionality here");
    }
}


  onContextMenuEdit(item: Employee, id) {
    this.id = item.id;
    this.name = item.name;
    this.description = item.description;
    this.modalref = this.modalService.show(id);
    var test = this.modalService.getModalsCount();
    console.log(test)
  }
  openDialog(id: number): void {
    console.log('selectedid:', id);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
       this.id = result;
       this._data.deleteEmployee(id).subscribe(
        ()=>{
          alert('deleted');
          this.fetchData();
        }
      );
    });

  }

  onUpdate(f1) {
    var req = {
      id: f1.value.id,
      name: f1.value.name,
      description: f1.value.description
    };
    this._data.addEmployees(req).subscribe((data: any) => {
      this._data.getAllEmployees().subscribe((data: Employee[]) => {
        this.arr = data;


        this.modalref.hide();

        this.getEmployeeslist();
      });

    });
  }
  close() {
    this.tableForm.reset();
  }




  openadd(item) { }

  onFormSubmit(item) {
    console.log(item);
    console.log(item);
    var req = {
      id: 0,
      description: item.description,
      name: item.name
    };
    this._data.addEmployees(req).subscribe(
      (data: Employee[]) => {
        this.arr = data;
       this.getEmployeeslist();
       alert('succefully added');
      },
      function (error) {
        alert(error);
      },
      function () { }


    );

  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  removeSelectedRows() {
    this.selection.selected.forEach(item => {
      let index: number = this.arr.findIndex(d => d === item);
      console.log(this.arr.findIndex(d => d === item));
      this.arr.splice(index,1)
      this.dataSource = new MatTableDataSource<Employee>(this.arr);
    });
    this.selection = new SelectionModel<Employee>(true, []);
  }



  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select());
  }


  }

