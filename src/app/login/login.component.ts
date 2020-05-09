import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from '@angular/material/icon';



const googleLogoURL =
  "https://image.flaticon.com/icons/svg/2702/2702602.svg";

const fbLogoURL =
  "https://image.flaticon.com/icons/svg/20/20673.svg";

const eLogoURL =
  "https://image.flaticon.com/icons/svg/2089/2089181.svg";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    this.matIconRegistry.addSvgIcon(
      "glogo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));

    this.matIconRegistry.addSvgIcon(
      "fblogo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(fbLogoURL));

    this.matIconRegistry.addSvgIcon(
      "elogo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(eLogoURL));
  }


  ngOnInit() { }

}
