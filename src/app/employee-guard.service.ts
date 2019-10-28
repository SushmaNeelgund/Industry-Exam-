import { Injectable } from "@angular/core";
import { EmployeedataService } from "./employeedata.service";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Route
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class EmployeeGuardService {
  constructor(private _data: EmployeedataService, private _router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isUserLoggedIn(state.url);
  }
  // canLoad(_route: Route) {
  //   return this.isUserLoggedIn(_route.path);
  // }
  isUserLoggedIn(url: string): boolean {
    if (this._data.isLoggedIn) {
      return true;
    }
    this._data.redirectURL = url;
    this._router.navigate(["/login"]);
    return false;
  }
}
