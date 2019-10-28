import { Component, OnInit } from "@angular/core";
import { deletedata } from "./deletedata";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.css"]
})
export class CheckboxComponent implements OnInit {
  arr: deletedata[] = [

    new deletedata(1,'Deepa','Angular'),
    new deletedata(2,'Shivu','development'),
    new deletedata(3,'Sujit','UI'),
    new deletedata(4,'Abhi','Angular'),
    new deletedata(5,'Akshata','Development'),
    new deletedata(6,'Mahesh','Angular'),
    new deletedata(7,'sai','Development'),
    new deletedata(8,'Pravin','UI'),
    new deletedata(9,'chetan','UI'),
    new deletedata(10,'Ashwini','DevOps'),
    new deletedata(11,'jbd','DevOps'),
    new deletedata(12,'jbd','Development'),
    new deletedata(13,'jbd','Angular'),
    new deletedata(14,'jbd','DevOps'),
    new deletedata(15,'jbd','Development'),
    new deletedata(16,'jbd','Angular'),
    new deletedata(17,'jbd','Development'),
    new deletedata(18,'jbd','Angular'),
    new deletedata(19,'jbd','Development'),
    new deletedata(20,'jbd','Angular')
  ];

  constructor() {}

  ngOnInit() {}

  checkbox(item) {
    console.log(item);
    this.arr.push(item);
    console.log(this.arr.length);
  }

  deleteAll() {
    var result = confirm("Are you sure?");
    if (result) {
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr.find(x => x == this.arr[i])) {
          this.arr.splice(this.arr.indexOf(this.arr[i]), 1);
        }
      }
    }
  }
}
