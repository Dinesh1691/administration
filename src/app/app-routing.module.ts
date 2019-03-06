import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes : Routes = [
  { 
    path: '',
    redirectTo: '/Home', 
    pathMatch: 'full' 
  },
  { 
    path: 'Home', 
    component: HomeComponent 
  },
  {
    path:'admin',
    loadChildren:'./admin/admin.module#AdminModule'
  },
  {
    path:'staff',
    loadChildren:'./staff/staff.module#StaffModule'
  },
  {
    path:'student',
    loadChildren:'./student/student.module#StudentModule'
  }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
