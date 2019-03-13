import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminCrudComponent } from './admin-crud/admin-crud.component';
import {StaffModule } from '../staff/staff.module';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    StaffModule
  ],
  declarations: [AdminListComponent, AdminCrudComponent]
})
export class AdminModule { }
