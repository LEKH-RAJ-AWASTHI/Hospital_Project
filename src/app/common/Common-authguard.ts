import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { MyToken } from "./Common-token";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private _router:Router,public _token:MyToken){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(this._token.value.length !=0){
      return true;
    }
    this._router.navigate(['/login']);
    return false;
  }

}
