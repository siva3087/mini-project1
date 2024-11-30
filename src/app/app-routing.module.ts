import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllemployeeComponent } from './allemployee/allemployee.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  {path:'allemployee',component:AllemployeeComponent},
  {path:'dash-board', component:DashBoardComponent, children:[
    {path:'home',component:HomeComponent},
    {path:'allemployee',component:AllemployeeComponent},
    {path:'create-employee', component:CreateEmployeeComponent}
]};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
