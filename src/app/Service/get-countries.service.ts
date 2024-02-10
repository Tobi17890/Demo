import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Country } from '../Interface/country';

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {
  private countriesSubject: BehaviorSubject<Country[]> = new BehaviorSubject<Country[]>([]);

  constructor(private http: HttpClient) {
    this.loadCountries();
  }

  private loadCountries(): void {
    this.http.get<Country[]>('https://restcountries.com/v3.1/all').subscribe(
      (countries: Country[]) => {
        this.countriesSubject.next(countries);
      },
      (error) => {
        console.error('Error loading countries:', error);
      }
    );
  }

  getCountries(): Observable<Country[]> {
    return this.countriesSubject.asObservable();
  }

  updateCountries(countries: Country[]): void {
    this.countriesSubject.next(countries);
  }
}
