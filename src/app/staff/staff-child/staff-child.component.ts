import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-staff-child',
  templateUrl: './staff-child.component.html',
  styleUrls: ['./staff-child.component.css']
})
export class StaffChildComponent implements OnInit {

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
