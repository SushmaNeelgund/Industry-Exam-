import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { TreeNode } from 'primeng/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class EmployeedataService {

  constructor(private http: HttpClient, private _router:Router) {}

  url: string = "https://5df2226b.ngrok.io/api/Settings/GetDesignations";
  url2: string = "https://5df2226b.ngrok.io/api/Settings/InsUpdateDesignation";
  url3: string =
    "https://5df2226b.ngrok.io/api/Settings/DeleteDesignation?DesignationId=";

  getAllEmployees() {
    return this.http.get(this.url);
  }
  addEmployees(item) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(item);
    return this.http.post(this.url2, body, { headers: head });
  }
  editEmployees(item: any) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(item);
    return this.http.post(this.url2, body, { headers: head });
  }

  deleteEmployee(id) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    // return this.http.delete(this.url3+id,{headers:head});
    return this.http.post(this.url3 + id, { headers: head });
  }
  currentUser;

  redirectURL: string;
  login(user_email: string, user_password: string) {
    if (user_email == "admin" && user_password == "1234") {
      this.currentUser = {
        user_email: user_email,
        password: user_password,
        isAdmin: true
      };
      return;
    }
    this.currentUser = {
      user_email: user_email,
      password: user_password,
      isAdmin: false
    };
  }
  logout() {
    this.currentUser = null;
    this.redirectURL = "";
    this._router.navigate([""]);
  }
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

}
