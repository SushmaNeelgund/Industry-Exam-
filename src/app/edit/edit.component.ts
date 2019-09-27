// import { Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AboutersComponent } from '../abouters/abouters.component';

// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent implements OnInit {

//   selectedEmployeeOption: string;
//   arr: AboutersComponent[] = [];
//   id:number;
//   name:string;
//   description:string;
//   updatedItem:string;
//   constructor(
//     private modalService: NgbModal,
//     private _data:Abot,

//   ) { }



//   ngOnInit() {
//     this.getallemployees();
//   }
//   getallemployees(){
//     this._data.getAllEmployees().subscribe(
//       (data:AboutersComponent[])=>{
//         this.arr=data;
//       }
//     );
//   }
//  // Add modal
//  openAdd(content, passedTitle) {
//   this.selectedEmployeeOption = passedTitle;
//   // this.name = "";
//   // this.description = "";
//   this.modalService.open(content);
// }
// onFormSubmit(f) {
//   if (this.selectedEmployeeOption == "Add") {
//       console.log(this.id);
//       this._data.addEmployees(f.value).subscribe((data: any) => {
//           console.log(f.value);

//           this.getallemployees();
//       });
//   } else {
//       console.log(f.value);
//       console.log(f.value.name);
//       var req = {
//           id: this.id,
//           description: f.value.Description,
//           name: f.value.Name
//       };
//       console.log(req);

//     this._data.editEmployees(req).subscribe( (data:any)=>{
//         alert('updated');
//         this.getallemployees();
//       }
//     );

//   }

//   this.modalService.dismissAll();
// }


// // Edit modal popup
// openEditPopup(content, passedTitle,i, arr) {

//   this.selectedEmployeeOption = passedTitle;
//   console.log(arr.id);
//   this.id = arr.id;
//   this.name = this.arr[i].name;
//   this.description = this.arr[i].description;

//   this.updatedItem = i;

//   this.modalService.open(content);
// }

// confirmDelete(id: AboutersComponent) {
//   console.log(id);
//   this._data.deleteEmployee(id).subscribe(
//     (data:any)=>{
//       // this.arr.splice(this.arr.indexOf(id),1);
//       alert('deleted');
//     }
//   );
// }
// }




