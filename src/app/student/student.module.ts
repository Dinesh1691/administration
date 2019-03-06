import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [StudentListComponent]
})
export class StudentModule { }
