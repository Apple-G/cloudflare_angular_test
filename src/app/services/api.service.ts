import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class ApiService {
   
  constructor(private httpClient: HttpClient) { }
  
  getCountrys(){
    return this.httpClient.get("./api/countrys);
  }
  
}
