import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  @Input() deviceXs: boolean;

  public images1 = [];
  public images2 = [];
  public button = [];
  public radiobtn = [];


  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  constructor(public data: DataService) {
    this.images1 = this.data.getdataf();
    this.images2 = this.data.getdatas();
    this.button = this.data.getbutton();
    this.radiobtn = this.data.radio();

  }
  ngOnInit() { }
}
