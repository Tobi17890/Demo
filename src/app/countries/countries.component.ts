import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GetCountriesService } from '../Service/get-countries.service';
import { Country } from '../Interface/country';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
})
export class CountriesComponent {

  currentPage = 1;
  countries: any[] = []; 
  constructor(private Http: HttpClient, private country: GetCountriesService) {}

  ngOnInit() {
    this.country.getCountries().subscribe((data) => {      
      this.countries = data?.slice(0, 25);
    });
  }

  getCountries(): Observable<Country[]> {
    const startIndex = (this.currentPage - 1) * 25;
    return this.Http.get<Country[]>(`https://restcountries.com/v3.1/all?start=${startIndex}&limit=25`);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.getCountries().subscribe((data) => {
      console.log(data); // Display countries for the updated page
    });
  }
}
