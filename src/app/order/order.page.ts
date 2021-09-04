import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-order',
  templateUrl: 'order.page.html',
  styleUrls: ['order.page.scss']
})
export class OrderPage {
  map: any;

  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor() {}

  ionViewDidEnter() {
    this.showMap();
  }
  showMap() {
    const location = new google.map.LatLng(-17.824858, 31.053028);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }
}
