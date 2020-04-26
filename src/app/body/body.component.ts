import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FlexOrderStyleBuilder } from '@angular/flex-layout';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  @Input() deviceXs: boolean;

  public images = [];

  // nepalImg =
  //   'https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/03/30/2020-03-30-tokyo-thumbnail-02.jpg';

  // tokyoImg =
  //   'https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/03/30/2020-03-30-tokyo-thumbnail-02.jpg';

  // sanImg =
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU9ANS5rcieo7OUFeyjBTATWos2H9NjOmH1w2QHgDnCpKsiM_0&usqp=CAU';

  // lonImg =
  //   'https://secure.i.telegraph.co.uk/multimedia/archive/02423/london_2423609b.jpg';

  // singImg =
  //   'https://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2020/04/Singapore-merlion.jpg';

  // ausImg = 'https://churific.com/wp-content/uploads/2015/06/sydney-image.jpg';

  // canImg =
  //   'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg';

  // newImg =
  //   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9ufVG-g9uuyW6N2vbrF-VaOukwNF4KSXqO_Q0P4fnVJz0EO4l&usqp=CAU';

  constructor(private data: DataService) {
    this.images = this.data.getdata();
  }
  ngOnInit() {}
}
