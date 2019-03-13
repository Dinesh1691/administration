import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BsModalService]
})
export class HomeComponent implements OnInit {
  bsModelRef: BsModalRef;
  userName: string;
  password: string;
  userType: string;
  jsonData: any = [];
  userNameError:any;
  loginPasswordError:any;
  selectTypeError:any;
  loader:any;
  contactButtonValue: any;
  invalid: string;

  constructor(public modalService: BsModalService, private http: HttpClient, private global: GlobalService, private route: Router) {
    //console.log(global);
  }
  obj
  modalRef: BsModalRef;
  config = {
    animated: true,
    class: ''
  };
  //data : String[];

  openModal(template: TemplateRef<any>) {
    if (this.modalRef) {
      this.closeModal();
    }
    // this.config.class = cssClass;
    this.modalRef = this.modalService.show(template, this.config);
  }
  closeModal() {
    this.userName='';
    this.password = '';
    this.modalRef.hide();
  }
  ngOnInit() {
    this.userNameError='';
    this.loginPasswordError='';
    this.selectTypeError='';
    this.contactButtonValue="login"


  }


  onChangeOfUserType(event) {
    this.userType = event.target.value;
    console.log("userType " + this.userType);
  }

  login() {
    const regex_username = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    if (this.userName === undefined || this.userName === '' || this.userName == null) {
      this.userNameError = 'Please provide your name';
      document.getElementById('name').style.border = '1px solid #FD4545';
      setTimeout(() => {
          this.userNameError = '';
      }, 2000);
    }
      else if (this.password === undefined || this.password === '' || this.password == null) {

        this.loginPasswordError = 'Please enter password';
        document.getElementById('passwordField').style.border = '1px solid #FD4545';
        setTimeout(() => {
          this.loginPasswordError = '';
        }, 2000);
      } 
      else if (this.userType === undefined || this.userType === '' || this.userType == null) {

        this.selectTypeError = 'Please Select User Type';
        document.getElementById('select').style.border = '1px solid #FD4545';
        setTimeout(() => {
          this.selectTypeError = '';
        }, 2000);
      } 
      else{



    this.global.getJson().subscribe(data => {
      this.jsonData = data;
      console.log(this.jsonData)
      let userAccepted = this.jsonData
        .filter(x => x.userName == this.userName)
        .filter(y => y.password == this.password)
        .filter(z => z.userType == this.userType);
      console.log(userAccepted)
      if (userAccepted && userAccepted.length === 1) {
        localStorage.setItem("currentUser",userAccepted[0].userName);
        if ("admin" == this.userType) {
          console.log("admin executed")
          this.closeModal();
          this.route.navigate(['/admin']);
        }
        else if ("staff" == this.userType) {
          console.log("staff executed")
          this.closeModal();
          this.route.navigate(['/staff']);
        }
        else if ("student" == this.userType) {
          console.log("student executed")
          this.closeModal();
          this.route.navigate(['/student']);
        }
      
      }
    
 else {
       this.invalid="Invalid Credentials!!!"; 
  
  setTimeout(() => {
    this.invalid=''; 
  }, 1000);
       
      }


    });
  }
  }
  onKeyPress(event: any) {
    if (event.target.value === '') {
        document.getElementById(event.target.id).style.border = '1px solid #FD4545';
    } else {
          document.getElementById(event.target.id).style.border = '1px solid #E8E8E8';
    }
}
  

}
