import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { EmployeedataService } from "../employeedata.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _data: EmployeedataService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.login = this.fb.group({
      user_email: new FormControl(null, Validators.required),
      user_password: new FormControl(null, Validators.required)
    });
  }
  onLoginSubmit() {
    this._data.login(
      this.login.value.user_email,
      this.login.value.user_password
    );
    if (this._data.redirectURL) {
      this._router.navigateByUrl(this._data.redirectURL);
    } else {
      this._router.navigate(["/home"]);
    }
  }
}
