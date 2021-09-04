import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor() {}
  searchText;
  heroes = [
    { id: 11, name: 'Mr. Nice', produce: 'Cabbage' },
    { id: 12, name: 'Miss P', produce: 'Lettuce' },
    { id: 13, name: 'Bomto', produce: 'Potatoes' },
    { id: 14, name: 'Celeritas', produce: 'Carrots' },
    { id: 15, name: 'Magneta', produce: 'Seeds' },
    { id: 16, name: 'RubberMan', produce: 'Watermelon' },
    { id: 17, name: 'Dynama', produce: 'Strawberry' },
    { id: 18, name: 'Dr IQ', produce: 'Bananas' },
    { id: 19, name: 'Magma', produce: 'Onions' },
    { id: 20, name: 'Tornado', produce: 'Lemon' }
  ];
}
