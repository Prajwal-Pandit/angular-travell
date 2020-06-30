import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { AccountService } from '../services/account.service';



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
  userDeatils;
  userClaims: any;


  constructor(
    private data: DataService,
    private route: Router,
    private userService: BackendService,
    private account: AccountService
  ) {
    this.images = this.data.getdata();
    this.buttons = this.data.getbutton();
    //   this.radiobtn = this.data.radio();
    //   this.foot = this.data.footer();
    this.maps = this.data.getMap();
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  ngOnInit() {
    let tokenDetails = this.account.getUserTokenDetails();
    this.userDeatils = tokenDetails.data;
  }

  //what else is there? the detail is in token but i have to show it in html like  i have to show the username and address how should i??,
  // you have now function, you can call and store it in any variable like i did in yes i can but i dont know how to retrieve the specific data like usernam and address only
  // TODO: learn json object manupulation ok

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

  //where do you want the details
  isnavigating(name: string): boolean {

    if (!this.navi) { // if no radio button is selected, always return false so every nothing is shown  
      return false;
    }

    return (this.navi === name); // if current radio button is selected, return true, else return false  
  }

}