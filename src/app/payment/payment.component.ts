import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { PaymentserviceService } from '../paymentservice.service'
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from '@angular/material/icon';

const payLogoURL =
  "https://image.flaticon.com/icons/svg/196/196566.svg";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  @Input() deviceXs: boolean;


  public countries = [];
  public cards = [];


  constructor(public data: DataService, public pay: PaymentserviceService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {

    this.countries = this.pay.getCountry();
    this.cards = this.pay.getcard();

    this.matIconRegistry.addSvgIcon(
      "paylogo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(payLogoURL));
  }



  ngOnInit() { }

}
