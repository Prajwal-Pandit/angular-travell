import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [BackendService]
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  response: any;
  isLoginError: boolean = false;
  isloading: boolean = false;

  constructor(private backendAPI: BackendService, private route: Router) { }


  ngOnInit() {
    this.login = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }


  userLogin(FormValue) {
    console.log(FormValue)
    return new Promise((resolve, reject) => {
      if (FormValue.status == "VALID") {
        this.isloading = true;
        this.backendAPI.loginService(FormValue.value).subscribe((result: any) => {
          if (result.status == 200) {
            localStorage.setItem('user', result.data.authToken);
            this.route.navigate(['body']);
            this.isloading = false;
          }
        }, error => {
          this.isloading = false;
          if (error.error.error == true && error.status == 404) {
            alert("Username or password are invalid");
          }
        })

      } else {
        alert("Username and password are required")
      }
    })
  }


  get loginEmail() {
    return this.login.get('username');
  }

  get loginPassword() {
    return this.login.get('password');
  }

  signup() {
    this.route.navigate(['signup']);
  }

}