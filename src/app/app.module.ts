import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {  HttpClientModule } from '@angular/common/http';
import { ContractorsComponent } from './contractors/contractors.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
// import { AboutersComponent } from './abouters/abouters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
// import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';


@NgModule({
  declarations: [
    AppComponent,

    ContractorsComponent,
    ContractorsComponent,
    MenuNavComponent,
    EmployeeComponent,
    ContactusComponent,
    AboutComponent,
    // AboutersComponent,
    // NgbModalBackdrop


  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
