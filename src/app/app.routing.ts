import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TreetableComponent } from './treetable/treetable.component';
import { LoginComponent } from './login/login.component';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';
import { ExportComponent } from './export/export.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'Employee', component: EmployeeComponent},
  {path: 'contact', component: ContactusComponent},
  {path: 'About', component: AboutComponent},
  {path: 'MultiSelect', component: MultiSelectComponent},
  {path: 'CheckBox', component: CheckboxComponent},
  {path: 'treetable', component: TreetableComponent},
  {path: 'syncfusion', component: SyncfusionComponent},
  {path:'exporting',component:ExportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

