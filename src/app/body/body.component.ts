import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';
import PlaceResult = google.maps.places.PlaceResult;
import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BodyComponent implements OnInit {
  @Input() deviceXs: boolean;

  zoom: number = 3;

  // initial center position for the map
  lat: number = 27.7172;
  lng: number = 85.3240;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }


  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
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

  ]



  public images1 = [];
  public images2 = [];
  public button = [];
  public radiobtn = [];
  public foot = [];

  constructor(public data: DataService, public dialog: MatDialog) {
    this.images1 = this.data.getdataf();
    this.images2 = this.data.getdatas();
    this.button = this.data.getbutton();
    this.radiobtn = this.data.radio();
    this.foot = this.data.footer();
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
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

