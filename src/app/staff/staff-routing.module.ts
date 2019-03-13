import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffChildComponent } from './staff-child/staff-child.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffCrudComponent } from './staff-crud/staff-crud.component';

const routes: Routes = [
  {
    path:'',
    component:StaffListComponent,
  },
  {
    path:'staffchild',
    component:StaffChildComponent
  },
  {
    path:'staffcrud',
    component:StaffCrudComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
