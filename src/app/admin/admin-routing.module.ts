import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';

const routes: Routes = [
  {
    path: '',
    component:AdminListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
