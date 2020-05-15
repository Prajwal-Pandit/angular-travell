import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';
import { MouseEvent } from '@agm/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from '@angular/material/icon';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BodyComponent implements OnInit {

  zoom: number = 2;

  public maps: any =
    [{
      lat: 27.7172,
      lng: 85.3240,
      label: 'Kathmandu',
      draggable: true
    },
    {
      lat: 35.6804,
      lng: 139.7690,
      label: 'Tokyo',
      draggable: false
    },
    {
      lat: 51.5285582,
      lng: -0.2416798,
      label: 'London',
      draggable: true
    },
    {
      lat: -28.8024098,
      lng: 127.4861819,
      label: 'Australia',
      draggable: true
    },
    {
      lat: 1.3437449,
      lng: 103.7540048,
      label: 'Singapore',
      draggable: true
    },
  ];

  constructor() {
    //   this.images1 = this.data.getdataf();
    //   this.images2 = this.data.getdatas();
    //   this.button = this.data.getbutton();
    //   this.radiobtn = this.data.radio();
    //   this.foot = this.data.footer();
  }
  ngOnInit() {
  }

}


