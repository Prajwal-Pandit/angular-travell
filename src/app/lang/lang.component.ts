import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { PaymentserviceService } from '../paymentservice.service'; 

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {
  @Input() deviceXs: boolean;

  public lang = [];
  public countries = [];
  public currencies = [];


  constructor(public data: DataService,public pay: PaymentserviceService) {

  }

  ngOnInit(): void {
  }

}
