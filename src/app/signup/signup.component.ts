import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup: FormGroup;

  constructor(private backendAPI: BackendService, private route: Router, private spinner: NgxSpinnerService) { }


  ngOnInit() {
    this.signup = new FormGroup({
      clientFirstName: new FormControl('', Validators.required),
      clientLastName: new FormControl('', Validators.required),
      clientAddress: new FormControl('', Validators.required),
      clientEmail: new FormControl('', Validators.required),
      clientContactNumber: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  get firstName() {
    return this.signup.get('clientFirstName');
  }

  get lastName() {
    return this.signup.get('clientLastName');
  }

  get address() {
    return this.signup.get('clientAddress');
  }

  get email() {
    return this.signup.get('clientEmail');
  }

  get contact() {
    return this.signup.get('clientContactNumber');
  }

  get username() {
    return this.signup.get('username');
  }

  get password() {
    return this.signup.get('password');
  }



  signin() {
    this.route.navigate(['login']);
  }




  onSubmit(formvalue) {
    this.spinner.show();
    if (!formvalue.value) {
      this.spinner.hide();
      return;
    }
    else {

      this.backendAPI.limitedUserSignup(formvalue.value).subscribe((resData: any) => {
        this.spinner.hide();
        this.route.navigate(['login']);
      }, error => {
        this.spinner.hide();
      });
    }
    formvalue.reset;

  }
  // now shall we check??yes
  // onSubmit(formvalue) {
  //   this.spinner.show();
  //   this.backendAPI.limitedUserSignup(formvalue.value).subscribe(
  //     res => console.log(res),
  //     error => console.log(error),
  //   )
  // }
}
// now we can go ahead, yes