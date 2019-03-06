import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffListComponent } from './staff-list/staff-list.component';
const routes: Routes = [
  {
    path:'',
    component:StaffListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
