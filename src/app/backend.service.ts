import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  readonly loginBaseURL = 'https://client-login-microservice.herokuapp.com/api/v1/sc';

  constructor(
    private http: HttpClient
  ) { }


  loginService(crendentials) {
    return this.http.post(`${this.loginBaseURL}/login`, crendentials);
  }

  // userAuth(username, password) {
  //   var data = "username = " + username + "password = " + password;
  //   return this.http.post(`${this.loginBaseURL}/login`, data);
  // }

  getUserClaims() {
    return this.http.get(this.loginBaseURL + '/login', {headers: new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('user')})});
  }
}
