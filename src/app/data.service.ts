import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public getdataf() {
    return [
      {
        image:
          'https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/03/30/2020-03-30-tokyo-thumbnail-02.jpg',
        name: 'KATHMANDU',
        place: 'Nepal',
        desc: 'This is the place of Nepal',
      },
      {
        image:
          'https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/03/30/2020-03-30-tokyo-thumbnail-02.jpg',
        name: 'Tokyo',
        place: 'Nepal',
        desc: 'This is the place of Nepal',
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU9ANS5rcieo7OUFeyjBTATWos2H9NjOmH1w2QHgDnCpKsiM_0&usqp=CAU',
        name: 'San-Francisco',
        place: 'Nepal',
        desc: 'This is the place of Nepal',
      },
      {
        image:
          'https://secure.i.telegraph.co.uk/multimedia/archive/02423/london_2423609b.jpg',
        name: 'London',
        place: 'Nepal',
        desc: 'This is the place of Nepal',
      },
    ];
  }

  public getdatas() {
    return [
      {
        image:
          'https://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2020/04/Singapore-merlion.jpg',
        name: 'Singapore',
        place: 'Nepal',
        desc: 'This is the place of Nepal',
      },
      {
        image:
          'https://churific.com/wp-content/uploads/2015/06/sydney-image.jpg',
        name: 'Australia',
        place: 'Nepal',
        desc: 'This is the place of Nepal',
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9ufVG-g9uuyW6N2vbrF-VaOukwNF4KSXqO_Q0P4fnVJz0EO4l&usqp=CAU',
        name: 'New-York',
        place: 'New-York',
        desc: 'This is the place of Nepal',
      },
      {
        image:
          'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg',
        name: 'Canada',
        place: 'Nepal',
        desc: 'This is the place of Nepal',
      },
    ];
  }

  public getbutton() {
    return [
      { text: 'Flights', icon: 'flight' },
      { text: 'Hotels', icon: 'hotel' },
      { text: 'Car-Hire', icon: 'directions_car' },
    ];
  }
}
