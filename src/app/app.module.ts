import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RoutingModule } from "./app.routing";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
import { MenuNavComponent } from "./menu-nav/menu-nav.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeComponent } from "./employee/employee.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { AboutComponent } from "./about/about.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatGridListModule,
  MatSortModule,
  MatDialogModule,
  MatCheckboxModule
} from "@angular/material";
import { MatListModule } from "@angular/material/list";
import {
  NgbActiveModal,
  NgbModalModule,
  NgbModalRef,
  NgbModule
} from "@ng-bootstrap/ng-bootstrap";
import { MatFormFieldModule } from "@angular/material";
import { HomeComponent } from "./home/home.component";
import { NgxPaginationModule } from "ngx-pagination";
// import { ConfirmationDialog } from './confirm-dialog/confirmation-dialog';
import { BsModalService, BsModalRef, ModalModule } from "ngx-bootstrap/modal";
import { ConfirmationDialogService } from "./confirmation-dialog.service";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MultiSelectComponent } from "./multi-select/multi-select.component";
import { Confirmation2Component } from "./confirmation2/confirmation2.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { AccordionModule } from "ngx-bootstrap";
import { RatingModule } from "ngx-bootstrap";
import { TreetableComponent } from "./treetable/treetable.component";
import { ContextMenuModule } from "primeng/contextmenu";
import { ToastModule } from "primeng/toast";
import { TreeTableModule } from "primeng/treetable";
import { MessageService } from "primeng/api";
// import { Httpmodule } from "@angular/http";
import { HttpModule } from "@angular/http";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SidebarModule } from "primeng/sidebar";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageTranslationModule } from "./translation.module";
import { LoginComponent } from "./login/login.component";
import { SyncfusionComponent } from "./syncfusion/syncfusion.component";
import { TreeGridModule } from "@syncfusion/ej2-angular-treegrid";
import {
  PageService,
  SortService,
  FilterService,
  EditService,
  ToolbarService
} from "@syncfusion/ej2-angular-treegrid";
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";
import { DropDownListAllModule } from "@syncfusion/ej2-angular-dropdowns";
import { DialogModule } from "primeng/primeng";

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    EmployeeComponent,
    ContactusComponent,
    AboutComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    MultiSelectComponent,
    Confirmation2Component,
    CheckboxComponent,
    TreetableComponent,
    SidebarComponent,
    LoginComponent,
    SyncfusionComponent

    // ConfirmationDialog
  ],
  entryComponents: [ConfirmationDialogComponent],
  imports: [
    RoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTableModule,
    MatListModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    //  DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
    AccordionModule.forRoot(),
    RatingModule.forRoot(),
    TreeTableModule,
    ContextMenuModule,
    ToastModule,
    HttpModule,
    SidebarModule,
    TranslateModule,
    LanguageTranslationModule,
    TreeGridModule,
    ButtonModule,
    DropDownListAllModule,
    BrowserModule,
    TreeGridModule,
    ButtonModule,
    DropDownListAllModule,
    DialogModule
  ],
  providers: [
    ConfirmationDialogService,
    NgbActiveModal,
    BsModalService,
    BsModalRef,
    MessageService,
    PageService,
    SortService,
    FilterService,
    EditService,
    ToolbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
