import { Component, OnInit, Input, Inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeedataService } from '../employeedata.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Employee } from '../employee';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  arr: Employee[] = [];

  constructor(private _data: EmployeedataService,
              public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Employee) {}


    ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(id: number){
    console.log('id:', id);
  }
}
