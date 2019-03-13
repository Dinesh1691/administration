import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffChildComponent } from './staff-child/staff-child.component';
import { StaffCrudComponent } from './staff-crud/staff-crud.component';

@NgModule({
  imports: [
    CommonModule,
    StaffRoutingModule,
    FormsModule
  ],
  declarations: [StaffListComponent, StaffChildComponent, StaffCrudComponent],
  exports:[StaffCrudComponent]
})
export class StaffModule { }
