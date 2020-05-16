import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BodyComponent implements OnInit {

  images = [];
  buttons = [];
  zoom: number = 2;
  public maps: any = [];
    

  constructor(private data:DataService) {
    this.images = this.data.getdata();
    this.buttons = this.data.getbutton();
    //   this.radiobtn = this.data.radio();
    //   this.foot = this.data.footer();
    this.maps = this.data.getMap();
  }

  ngOnInit() {}

}


