import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffListComponent } from './staff-list/staff-list.component';

@NgModule({
  imports: [
    CommonModule,
    StaffRoutingModule
  ],
  declarations: [StaffListComponent]
})
export class StaffModule { }
