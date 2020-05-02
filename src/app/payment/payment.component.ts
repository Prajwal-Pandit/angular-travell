import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { PaymentserviceService } from '../paymentservice.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],

})
export class PaymentComponent implements OnInit {
  @Input() deviceXs: boolean;

  public countries = [];
  public cards = [];


  constructor(public data: DataService, public pay: PaymentserviceService) {

    this.countries = this.pay.getCountry();
    this.cards = this.pay.getcard();
  }


  ngOnInit() { }

}
