import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  page: string = 'Top Rated Farmers';
  constructor() {}
  async change() {
    this.page = 'Farmers that sell vegetables';
  }
}
