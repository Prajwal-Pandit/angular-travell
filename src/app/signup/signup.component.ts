import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup: FormGroup;

  constructor(private backendAPI: BackendService, private route: Router) { }


  ngOnInit() {
    this.signup = new FormGroup({
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
  }

  get email() {
    return this.signup.get('email');
  }

  get contact() {
    return this.signup.get('contact');
  }

  get firstName() {
    return this.signup.get('firstname');
  }

  get lastName() {
    return this.signup.get('lastname');
  }

  get username() {
    return this.signup.get('username');
  }

  get pass() {
    return this.signup.get('pass');
  }



  signin() {
    this.route.navigate(['login']);
  }




  onSubmit(formvalue) {
    if (!formvalue.value) {
      return;
    }
    else {
      this.backendAPI.limitedUserSignup(formvalue.value).subscribe((resData: any) => {
        console.log(resData);
      }, error => {
        console.log(error);
      });
    }
    formvalue.reset;

  }
}
