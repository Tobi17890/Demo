import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Interface/country';
import { GetCountriesService } from '../Service/get-countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrl: './all-countries.component.scss'
})
export class AllCountriesComponent {
  countries: any[] = []; 

  constructor(private country: GetCountriesService) {}

  ngOnInit() {

    this.country.getCountries().subscribe((data) => {      
      this.countries = data.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    });
  }
}
