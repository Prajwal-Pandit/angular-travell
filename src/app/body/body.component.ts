import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BodyComponent implements OnInit {

  @Input() deviceXs: boolean;
  validatingForm: FormGroup;
  bsValue = new Date();
  maxDate = new Date();

  images = [];
  buttons = [];
  zoom: number = 2;
  public maps: any = [];


  constructor(private data: DataService) {
    this.images = this.data.getdata();
    this.buttons = this.data.getbutton();
    //   this.radiobtn = this.data.radio();
    //   this.foot = this.data.footer();
    this.maps = this.data.getMap();
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormElegantEmail: new FormControl('', Validators.email),
      modalFormElegantPassword: new FormControl('', Validators.required)
    });
  }

  get modalFormElegantEmail() {
      return this.validatingForm.get('modalFormElegantEmail');
    }

  get modalFormElegantPassword() {
      return this.validatingForm.get('modalFormElegantPassword');
    }

  // Radio button shifting
  private selectedLink: string = "return";

  setradio(e: string) {
    this.selectedLink = e;
  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }

    return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }


  // Flight and hotel shiffting
  private navi: string = "flight";

  navigate(e: string) {
    this.navi = e;
  }

  isnavigating(name: string): boolean {

    if (!this.navi) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }

    return (this.navi === name); // if current radio button is selected, return true, else return false  
  }

}


