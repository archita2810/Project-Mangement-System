import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprojectComponent } from './dashboard/addproject/addproject.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import { ListprojectComponent } from './dashboard/listproject/listproject.component';
import { GraphComponent } from './graph/graph.component';
import { LoginprojectComponent } from './loginproject/loginproject.component';


const routes: Routes = [
  {path:'tblLogin',component:LoginprojectComponent},
  {path: 'tblProjectDetails',component:ListprojectComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'addproject', component:AddprojectComponent},
  {path: 'graph', component: GraphComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
