import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() { }

  public getdataf() {
    return [
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTv_dN7Lungz9_Qmdd0QKV1MCTuOUsd0c70EvGPogF7DfgkBya&usqp=CAU',
        name: 'Kathmandu',
        place: 'Nepal',
        desc:
          'Nepal is a tremendously attractive location for mountaineers, rock climbers and adventure seekers.It is being an attractive destination for adventure.',
      },
      {
        image:
          'https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/03/30/2020-03-30-tokyo-thumbnail-02.jpg',
        name: 'Tokyo',
        place: 'Nepal',
        desc:
          'There’s no better place to admire a historic icon of the capital. The station has been looking particularly spiffy after an extensive restoration a few years back. A major spot for many travellers passing in and out of the city.',
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU9ANS5rcieo7OUFeyjBTATWos2H9NjOmH1w2QHgDnCpKsiM_0&usqp=CAU',
        name: 'San-Francisco',
        place: 'Nepal',
        desc:
          'San Francisco is home to a little bit of everything. Whether you are a first time visitor or a long- time local, San Francisco Golden Gates welcome all.',
      },
      {
        image:
          'https://secure.i.telegraph.co.uk/multimedia/archive/02423/london_2423609b.jpg',
        name: 'London',
        place: 'Nepal',
        desc:
          'Its little wonder London, England is one of the worlds top tourist destinations, attracting upward of 20 million visitors each year from around the world. Britains capital city is a vibrant arts and entertainment center',
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
        desc:
          'Singapore is much more than the sum of its numerous attractions. It’s constantly evolving, reinventing, and reimagining itself, with people who are passionate about creating new possibilities.',
      },
      {
        image:
          'https://churific.com/wp-content/uploads/2015/06/sydney-image.jpg',
        name: 'Australia',
        place: 'Nepal',
        desc:
          'From beaches, national parks, museums, and tourist spots, here are our best picks for you to tour around the land of kangaroos! Make sure you don’t miss out on the best Australia tourist attractions to have a memorable experience.',
      },
      {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9ufVG-g9uuyW6N2vbrF-VaOukwNF4KSXqO_Q0P4fnVJz0EO4l&usqp=CAU',
        name: 'New-York',
        place: 'New-York',
        desc:
          'One of the greatest cities in the world, New York is always a whirlwind of activity, Many of the best places to visit in New York are within walking distance of each other, or just a short ride away, making this city a delight for sightseeing.',
      },
      {
        image:
          'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg',
        name: 'Canada',
        place: 'Nepal',
        desc:
          'Canada incredible geographical variety is a significant tourist attractor, most mountainous province and has some of the most spectacular mountain scenery in the world. ',
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

  public radio() {
    return [
      { text: 'Return', state: 'true' },
      { text: 'One-Way', state: 'false' },
      { text: 'Multi-city', state: 'false' },
    ];
  }


}
