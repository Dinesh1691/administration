import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
currentUser : string
data:any =[];

  constructor(private global: GlobalService) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');

    this.getStaffDetails();

  }

  getStaffDetails(){
    this.global.getJson().subscribe(res =>{
      this.data = res;
      console.log("data is fetching" + this.data);
    });
  }


}

