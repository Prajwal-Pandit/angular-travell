import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  @Input() deviceXs: boolean;

  animal: string;
  name: string;

  value = false;

  public images1 = [];
  public images2 = [];
  public button = [];
  public radiobtn = [];

  constructor(public data: DataService, public dialog: MatDialog) {
    this.images1 = this.data.getdataf();
    this.images2 = this.data.getdatas();
    this.button = this.data.getbutton();
    this.radiobtn = this.data.radio();


  }
  openDialog(): void {
    let dialogRef = this.dialog.open(PaymentComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() { }
}
