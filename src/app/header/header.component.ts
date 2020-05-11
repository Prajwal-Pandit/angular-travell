import { Component, Input, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { LangComponent } from '../lang/lang.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //@Input() deviceXs: boolean;
  validatingForm: FormGroup;
  bsValue = new Date();
  maxDate = new Date();

  optionsSelect: Array<any>;

  // openlogin(): void {
  //   let dialogRef = this.dialog.open(LoginComponent, {

  //   });

  //   dialogRef.afterClosed().subscribe(() => {
  //     console.log('The dialog was closed');
  //   });
  // }

  // openlang(): void {
  //   let dialogRef = this.dialog.open(LangComponent, {

  //   });

  //   dialogRef.afterClosed().subscribe(() => {
  //     console.log('The dialog was closed');
  //   });
  // }

  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);

  }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormElegantEmail: new FormControl('', Validators.email),
      modalFormElegantPassword: new FormControl('', Validators.required)
    });

    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
  }

  get modalFormElegantEmail() {
    return this.validatingForm.get('modalFormElegantEmail');
  }

  get modalFormElegantPassword() {
    return this.validatingForm.get('modalFormElegantPassword');
  }

}

