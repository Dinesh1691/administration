import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
jsonData : any;
  
  constructor(private http : HttpClient) {
    console.log("service");
    this.getJson();
   }

   public getJson(){
      return this.http.get('http://localhost:5000/data')
   }

}
