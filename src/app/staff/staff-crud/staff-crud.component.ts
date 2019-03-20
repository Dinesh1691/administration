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
  userNameUpd: any;
  emailUpd: any;
  phonenoUpd: any;
  departmentUpd: any;
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
  localType:any;


  constructor(private modalService: BsModalService,
    private global: GlobalService,private router : Router,private http : Http){}
   
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }

  ngOnInit() {
    this.getStudentDetails();
    this.updateContactError='';
this.updateEmailError='';
this.updateNameError='';
this.updatePasswordError='';
this.updateDeparError='';
    this.localType = localStorage.getItem('userType');

    // this.name= this.data.
  }
  
updateStudent(data){

this.dobj=data;
this.userNameUpd = this.dobj['userName'];
this.emailUpd = this.dobj["email"];
this.phonenoUpd = this.dobj["phoneno"];
this.departmentUpd = this.dobj["department"];

console.log("data value"+ JSON.stringify(this.dobj));
}

  getStudentDetails(){
    this.global.getJson().subscribe(res =>{
      this.data = res;
      console.log("data is fetching" + this.data);
    });
  }

  updateDetails(){
  
   
      this.studentObj={
        
        "userName":this.userNameUpd,
        "email":this.emailUpd,
        "phoneno":this.phonenoUpd,
        "department":this.departmentUpd,
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
        this.getStudentDetails();
 
    });
  
  
  }

  deleteStudent(id){
    var headers=new Headers();
      headers.append('content-type','application/json');
      if(confirm('Are You sure, You want to delete this student details? '))
{
  const url=`${"http://localhost:5000/data"}/${id}`;
  this.http.delete(url,{headers:headers}).subscribe((res)=>{
    this.getStudentDetails();
  }); 
}  
  }
  
  addStudents(){
    const regex_phone = /^\d{10}$/;
    const regex_username = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    const  regex_email  = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a]+)?$/;

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
    else if (!regex_email.test(this.Email)) {
      this.updateEmailError = 'Please enter valid email id';
      setTimeout(() => {
          this. updateEmailError = '';
      }, 2000);
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
    else if (this.department === undefined  || this.department === null) {
      this.updateDeparError = 'please enter department';
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
          this.getStudentDetails();

      }
      else{
        alert("un sucessfull")
      }


    });
  }
  }
    
toRoute(){
  console.log("getting userType" + JSON.stringify(this.localType));
  if(this.localType=='staff'){
      this.router.navigate(['/staff']);
  }else if(this.localType=='admin'){
      this.router.navigate(['/admin']);
  }else{
    console.log("the usertype received is incorrect ");
  }
}
}
