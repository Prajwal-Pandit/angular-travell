import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

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

  
  constructor(private data: DataService) {
    this.images1 = this.data.getdataf();
    this.images2 = this.data.getdatas();
    this.button = this.data.getbutton();
  }
  ngOnInit() {}
}
