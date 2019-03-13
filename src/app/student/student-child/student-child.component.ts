import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-student-child',
  templateUrl: './student-child.component.html',
  styleUrls: ['./student-child.component.css']
})
export class StudentChildComponent implements OnInit {

   @Input() data:any =[];

  constructor() { }

  ngOnInit() {
  }

}
