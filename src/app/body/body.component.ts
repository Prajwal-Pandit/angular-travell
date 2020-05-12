import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';
import { MouseEvent } from '@agm/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from '@angular/material/icon';


// const googleLogoURL =
//   "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

// const fbLogoURL =
//   "https://image.flaticon.com/icons/svg/20/20673.svg";

// const eLogoURL =
//   "https://image.flaticon.com/icons/svg/2089/2089181.svg";

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



  

  // ]
  //const googleLogoURL =
  //   "https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

  // const fbLogoURL =
  //   "https://image.flaticon.com/icons/svg/20/20673.svg";

  // const eLogoURL =
  //   "https://image.flaticon.com/icons/svg/2089/2089181.svg";


  // public images1 = [];
  // public images2 = [];
  // public button = [];
  // public radiobtn = [];
  // public foot = [];

  constructor() {
    //   this.images1 = this.data.getdataf();
    //   this.images2 = this.data.getdatas();
    //   this.button = this.data.getbutton();
    //   this.radiobtn = this.data.radio();
    //   this.foot = this.data.footer();


    //   this.matIconRegistry.addSvgIcon(
    //     "glogo",
    //     this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));

    //   this.matIconRegistry.addSvgIcon(
    //     "fblogo",
    //     this.domSanitizer.bypassSecurityTrustResourceUrl(fbLogoURL));

    //   this.matIconRegistry.addSvgIcon(
    //     "elogo",
    //     this.domSanitizer.bypassSecurityTrustResourceUrl(eLogoURL));
    // }


    // openDialog(): void {
    //   let dialogRef = this.dialog.open(PaymentComponent, {

    //   });

    //   dialogRef.afterClosed().subscribe(() => {
    //     console.log('The dialog was closed');
    //   });
  }
  ngOnInit() {
    // let index = this.radiobtn.findIndex(ele => ele.state = true);
    // this.favoriteSeason = this.radiobtn[index].value;
  }

}
// interface marker {
//   lat: number;
//   lng: number;
//   label?: string;
//   draggable: boolean;
// }

