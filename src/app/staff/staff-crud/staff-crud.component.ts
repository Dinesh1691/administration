import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgTemplateOutlet } from '@angular/common';
import { ViewChild } from '@angular/core';
import { GlobalService } from '../../global.service';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Http,Headers,Response } from '@angular/http';

@Component({
  selector: 'app-staff-crud',
  templateUrl: './staff-crud.component.html',
  styleUrls: ['./staff-crud.component.css']
})
export class StaffCrudComponent implements OnInit {
  public modalRef: BsModalRef;

  data:any =[];
  dobj:object={};
  name:string;
  email:string;
  phone:any;
  designation:string;
  id:number;
  studentObj:object={}

  userName:string;
  Email:string;
  password:any;
  mobile:any;
  department:string;
  type:string;

  updateContactError:any;
  updateNameError:any;
  updateEmailError:any;
  updatePasswordError:any;
  updateDeparError:any;


  constructor(private modalService: BsModalService,
    private global: GlobalService,private router : Router,private http : Http){}
   
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }

  ngOnInit() {
    this.getStaffDetails();
    this.updateContactError='';
this.updateEmailError='';
this.updateNameError='';
this.updatePasswordError='';
this.updateDeparError='';
    

    // this.name= this.data.
  }
  
updateStudent(data){

this.dobj=data;
console.log("data value"+ JSON.stringify(this.dobj));
}

  getStaffDetails(){
    this.global.getJson().subscribe(res =>{
      this.data = res;
      console.log("data is fetching" + this.data);
    });
  }

  updateDetails(){
  
   
      this.studentObj={
        
        "userName":this.dobj["userName"],
        "email":this.dobj["email"],
        "phoneno":this.dobj["phoneno"],
        "department":this.dobj["department"],
        "userType":this.dobj["userType"],
        "password":this.dobj["password"]
  
      }
      console.log(JSON.stringify(this.studentObj));
      var headers=new Headers();
      headers.append('content-type','application/json');
      const url=`${"http://localhost:5000/data"}/${this.dobj['id']}`;
      this.http.put(url,this.studentObj,{headers:headers}).subscribe((res:Response)=>
    {
        if(res.ok)
        {
            alert("updated sucessfully");
            this.modalRef.hide();
        }
        this.router.navigate(['/staff/staffcrud']);
 
    });
  
  
  }

  deleteStudent(id){
    var headers=new Headers();
      headers.append('content-type','application/json');
      if(confirm('Are You sure, You want to delete this student details? '))
{
  const url=`${"http://localhost:5000/data"}/${id}`;
  this.http.delete(url,{headers:headers}).subscribe((res)=>{
    this.getStaffDetails();
  }); 
}  
  }
  
  addStudents(){
    const regex_phone = /^\d{10}$/;
    const regex_username = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
     if (this.userName === undefined || this.userName === '' || this.userName == null) {
      this.updateNameError = 'Please provide your name';
      setTimeout(() => {
          this.updateNameError = '';
      }, 2000);
    }
    else if (this.Email === undefined  || this.Email === null) {
      this. updateEmailError= 'please enter Email';
      setTimeout(() => {
        this. updateEmailError= '';
      }, 3000);
    }
    else if (this.password === undefined  || this.password === null) {
      this.updatePasswordError = 'please enter password';
      setTimeout(() => {
        this. updatePasswordError= '';
      }, 3000);
    }
    
    else if (this.mobile === undefined  || this.mobile === null) {
      this.updateContactError = 'please enter contact number';
      setTimeout(() => {
        this.updateContactError = '';
      }, 3000);
    }
    else if (!regex_phone.test(this.mobile)) {
      this.updateContactError = 'Please enter valid contact number';
      setTimeout(() => {
        this.updateContactError = '';
      }, 3000);
    }
    else if (this.designation === undefined  || this.designation === null) {
      this.updateDeparError = 'please enter designation';
      setTimeout(() => {
        this.updateDeparError = '';
      }, 3000);
    }
else{
    this.studentObj={
        
      "userName":this.userName,
      "email":this.Email,
      "phoneno":this.mobile,
      "department":this.department,
      "userType":"student",
      "password":this.password

    }
    var headers=new Headers();
    headers.append('content-type','application/json');
    const url="http://localhost:5000/data";
    this.http.post(url,this.studentObj,{headers:headers}).subscribe((res:Response)=>{
      if(res.ok)
      {
          alert("added sucessfully");
          this.modalRef.hide();
          this.getStaffDetails();

      }
      else{
        alert("un sucessfull")
      }


    });
  }
  }
}
