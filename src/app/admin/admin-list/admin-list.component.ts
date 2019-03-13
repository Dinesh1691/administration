import { Component, OnInit } from '@angular/core';
// import { StaffCrudComponent } from '../../staff/staff-crud/staff-crud.component'
@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
currentUser:string;
  constructor() { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
    console.log(this.currentUser);
  }

}
