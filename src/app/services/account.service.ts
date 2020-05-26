import { Injectable } from '@angular/core';
import * as jwt_Decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  isUserLoggedIn() {
    let authToken = localStorage.getItem('user');
    if (authToken != null || authToken != undefined) {
      //TODO: CHECK THE TOKEN EXPIRY DATE AND RETURN TRUE IF VALID ? WILL YOU TRY OK I  WILL TRY OKAY. 
      return true;
    } else {
      return false
    }
  }

  getUserTokenDetails() {
    let isUserLoggedIn = this.isUserLoggedIn();
    if (isUserLoggedIn) {
      let authToken = localStorage.getItem('user');
      let decodedToken = jwt_Decode(authToken);
      console.log(decodedToken)
      return decodedToken
    }

  }

}
