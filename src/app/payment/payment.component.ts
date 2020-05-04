import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { PaymentserviceService } from '../paymentservice.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  // providers: [
  //   {
  //     provide: DateAdapter,
  //     useClass: MomentDateAdapter,
  //     deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  //   },

  //   { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  // ],

})
export class PaymentComponent implements OnInit {
  @Input() deviceXs: boolean;

  // date = new FormControl(moment());

  public countries = [];
  public cards = [];


  constructor(public data: DataService, public pay: PaymentserviceService) {

    this.countries = this.pay.getCountry();
    this.cards = this.pay.getcard();
  }



  ngOnInit() { }

}
