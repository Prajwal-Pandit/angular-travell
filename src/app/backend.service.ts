import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  readonly loginBaseURL = 'https://client-login-microservice.herokuapp.com/api/v1/sc-auth/login';
  private signupBaseUrl = 'https://client-login-microservice.herokuapp.com/api/v1/sc-auth/signup';

  constructor(
    private http: HttpClient
  ) { }


  loginService(crendentials) {
    return this.http.post<any>(this.loginBaseURL, crendentials);
  }

  limitedUserSignup(details) {
    //you need to add headers to this api ie usertype=limited user
    return this.http.post<any>(this.signupBaseUrl, details);
  }

}