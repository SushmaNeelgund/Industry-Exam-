 import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router';
 import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
 import { FormBuilder, Validators } from '@angular/forms';


 @Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.css']
})
export class ContractorsComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal,public fb: FormBuilder) {}
  articleId:number;
  articleName:string;
  catogoryName:string;
  categoryId:number;
  createdDate:number;
  createdByName:string;
  modifiedDate:string;
  modifiedByName:string;

  closeResult:string;
  content:string;
  priviewContent:string;



  ngOnInit() {
  }
  // openEdit(content,i){
  //   console.log(i);
  //   this.articleName= this.arr.articleName;
  //   this.catogoryName=  this.arr.catogoryName;
  //   this.articleId=  this.arr.articleId;
  //   this.categoryId=  this.arr.categoryId;
  //   this.createdByName=  this.arr.createdByName;
  //   this.createdDate=  this.arr.createdDate;
  //   this.modifiedDate=  this.arr.modifiedDate;
  //   this.modifiedByName=  this.arr.modifiedByName;
  //   this.priviewContent=  this.arr.priviewContent;
  //   this.content=  this.arr.content;

  //   this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
  //       result => {
  //         this.closeResult = `Closed with: ${result}`;
  //       },
  //       reason => {
  //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //       }
  //     );

  // }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
}

