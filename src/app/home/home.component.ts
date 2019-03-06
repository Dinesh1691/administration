import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

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

  openModal(template: TemplateRef<any>, cssClass: any) {
    if (this.modalRef) {
      this.closeModal();
    }
    this.config.class = cssClass;
    this.modalRef = this.modalService.show(template, this.config);
  }
  closeModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }
  ngOnInit() {

  }


  onChangeOfUserType(event) {
    this.userType = event.target.value;
    console.log("userType " + this.userType);
  }

  login() {

    this.global.getJson().subscribe(data => {
      this.jsonData = data;
      console.log(this.jsonData)
      let userAccepted = this.jsonData
        .filter(x => x.userName == this.userName)
        .filter(y => y.password == this.password)
        .filter(z => z.userType == this.userType);
      console.log(userAccepted)
      if (userAccepted && userAccepted.length === 1) {
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
        alert("invalid")
      }



    });
  }
}
