import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service'
import { AccountService } from './services/account.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private route: Router,
    private back: BackendService,
    private account: AccountService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //if (localStorage.getItem('user') != null) {
     // return true;
    //} else {
      //this.route.navigate(['/login']);
      //return false;
    //} now you don't need this. you can do it by isUserLOGGEDIN() ok if isuserlogged in then true?? i will show you?
    let userLogInStatus = this.account.isUserLoggedIn();
    if (userLogInStatus) {
      return true;
    } else {
      return false;
    }

  }

}
