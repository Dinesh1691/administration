import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  currentUser : string;
  constructor() { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
    console.log(this.currentUser);
  }

}
