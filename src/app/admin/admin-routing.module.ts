import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminCrudComponent } from './admin-crud/admin-crud.component';
import { StaffCrudComponent } from '../staff/staff-crud/staff-crud.component';

const routes: Routes = [
  {
    path: '',
    component:AdminListComponent
  },
  {
    path: 'admincrud',
    component:AdminCrudComponent
  },
  {
    path:'studentcrud',
    component:StaffCrudComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
