import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractorsComponent } from '../contractors/contractors.component';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { EmployeeComponent } from '../employee/employee.component';






const routes: Routes = [
  {path:'',component:MenuNavComponent},
  // {path:'abouter',component:AboutersComponent},
  {path:'contractor',component:ContractorsComponent},
  {path:'Employee',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//
