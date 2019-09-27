// import {  OnInit, Component } from '@angular/core';
// import { Task } from '../menu-nav/task';
// import { DataService } from '../data.service';
// import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
// import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-abouters',
//   templateUrl: './abouters.component.html',
//   styleUrls: ['./abouters.component.css']
// })
// export class AboutersComponent implements OnInit {

// arr:Task[]=[];
// all_arr:Task[]=[];
// pop:FormGroup;

//  constructor(private _data:DataService,private fb:FormBuilder,private modalservices:NgbModal) { }

//   ngOnInit() {
//     this.pop =this.fb.group({
//       Id: new FormControl(),
//       organizationId: new FormControl(),
//       name: new FormControl(),
//       description: new FormControl(),
//       isactive: new FormControl(),
//       createdBy: new FormControl(),
//       createdDate: new FormControl(),
//       modifiedBy:new FormControl(),
//       modifiedDate:new FormControl(),
//       organization:new FormControl()
//     });

//     this._data.getAbouters().subscribe(
//       (data:Task[])=>{
//         this.arr=data;
//         console.log(this.arr);
//         this.all_arr=this.arr['Task'];

//       }
//     );

//     }
//     openAddPopup(Addpopup){
//       this.modalservices.open(Addpopup,{

//       });
//     }
//     deleteTask()
// {

// }
// }


