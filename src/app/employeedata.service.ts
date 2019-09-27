import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {

  constructor(private http:HttpClient) { }


  url:string ='https://6d8d7b50.ngrok.io/api/Settings/GetDesignations';
  url2:string='https://6d8d7b50.ngrok.io/api/Settings/InsUpdateDesignation';
 url3:string='https://6d8d7b50.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';


  getAllEmployees(){
   return this.http.get(this.url);
  }
  addEmployees(item){
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(item);
    return this.http.post(this.url2,body,{headers:head});
  }
  editEmployees(item:any){
    let head = new HttpHeaders().set("Content-Type","application/json");
    let body = JSON.stringify(item);
    return this.http.post(this.url2,body,{headers:head});
  }

 deleteEmployee(id){
  let head = new HttpHeaders().set("Content-Type","application/json");
  return this.http.delete(this.url3+id,{headers:head});
 }
}
