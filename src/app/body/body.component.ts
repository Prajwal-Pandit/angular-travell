import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BodyComponent implements OnInit {

  @Input() deviceXs: boolean;

  bsValue = new Date();
  maxDate = new Date();

  images = [];
  buttons = [];
  zoom: number = 2;
  public maps: any = [];

  userClaims: any;


  constructor(private data: DataService, private route: Router, private userService:BackendService) {
    this.images = this.data.getdata();
    this.buttons = this.data.getbutton();
    //   this.radiobtn = this.data.radio();
    //   this.foot = this.data.footer();
    this.maps = this.data.getMap();
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
    });
  }


  logout() {
    localStorage.removeItem('user');
    this.route.navigate(['']);
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


