import { Component } from '@angular/core';

@Component({
  selector: 'app-filtering-countries',
  templateUrl: './filtering-countries.component.html',
  styleUrl: './filtering-countries.component.scss'
})
export class FilteringCountriesComponent {

  constructor() { }

  ngOnInit() {
  }

  sortAsc() {
    // Sort the countries in ascending order
  }

  sortDesc() {
    // Sort the countries in descending order
  }
}
