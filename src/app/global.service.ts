import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
jsonData : any;
  
  constructor(private http : HttpClient) {
    this.getJson();
   }

   public getJson(){
      return this.http.get('assets/data.json')
   }
}
