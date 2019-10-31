import { Component, OnInit } from '@angular/core';
import { EmployeedataService } from '../employeedata.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  public localData: any[];
  arr: Employee[];
  exportColumns: any[];
  selectedCars: Employee[];
  cols: any[];
  id:number;
  name:string;
  description:string;
  columns: any[];

  constructor(private _data: EmployeedataService) { }

  ngOnInit() {


    this._data.getAllEmployees().subscribe(
      (data:Employee[])=>{
        this.arr=data;
      }
    );

    this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'name', header: 'Name' },
        { field: 'description', header: 'Description' },
        { field: 'isactive', header: 'Isactive' }
    ];

    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
}

exportPdf() {
    import("jspdf").then(jsPDF => {
        import("jspdf-autotable").then(x => {
            const doc = new jsPDF.default(0,0);
            doc.autoTable(this.columns, this.arr);
            doc.save('primengTable.pdf');
        })
    })
}

exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.getCars());
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "primengTable");
    });
}

saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}

getCars() {
    let cars = [];
    for(let arr of this.arr) {
      arr.name = arr.name.toString();
    }
    return cars;
}


}
