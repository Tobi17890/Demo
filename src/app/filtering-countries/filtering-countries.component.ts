import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtering-countries',
  templateUrl: './filtering-countries.component.html',
  styleUrl: './filtering-countries.component.scss'
})
export class FilteringCountriesComponent {
  display: boolean = true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe((url) => {
      if (url[0]?.path === 'allcountries') {
        this.display = false;
      }
    });
  }

  sortAsc() {
    // Sort the countries in ascending order
  }

  sortDesc() {
    // Sort the countries in descending order
  }
}
