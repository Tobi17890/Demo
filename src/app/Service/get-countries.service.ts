import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Interface/country';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all');
  }

  // get all all countries and sort them by name Asc

}
