import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  readonly loginBaseURL = 'https://client-login-microservice.herokuapp.com/api/v1/sc-auth';

  constructor(
    private http: HttpClient
  ) { }


  loginService(crendentials) {
    return this.http.post(`${this.loginBaseURL}/login`, crendentials);
  }

  limitedUserSignup(details) {
    //you need to add headers to this api ie usertype=limited user
    return this.http.post(`${this.loginBaseURL}/signup`, details);
  }

  // userAuth(username, password) {
  //   var data = "username = " + username + "password = " + password;
  //   return this.http.post(`${this.loginBaseURL}/login`, data);
  // } ok you can try now. yes now i will try for signup?okay but when user submit there details how it will be save in that api i have to work on that?
  //you hve to create a form which takes all those parameters and create json object with those detials sned to that api ok i will work, okaythis
  //this week , you try to work on this porject, from next week we will move to aws munal project. ok great but one more thing
  // you told i can make this website i am working on to view others using github so that i can save the link for resume. yes, you can 
  // finish it and we will sit for github deployment. //you can also search for deploying angular project on github// i tried and it created the repo but it shows only the content of readme file which is on github
  // okay i will show you taht too once you complete this out. make sure no issue are there in console, ok, okay, anything more you want to have solved. no not upto now, later it may be
  // sure, today evening at you time, ping me a message, we will have a discussion on projects. ok sure
  // how is family and condition of nepal. its find Nepal is fighting for the land and india to and no one is now worry about the corona. :)
  // stay safe ya you too. god will bless me here :P :) ya he will bless us all.okay then see you in evening. ok sure i will text you. okay bye take care. bye

}