import { Component } from '@angular/core';
import { GetCountriesService } from '../Service/get-countries.service';
import { MatDialog } from '@angular/material/dialog';
import { Country } from '../Interface/country';
import { DetailCountryComponent } from '../detail-country/detail-country.component';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent {
  searchTerm: string = ''; 
  countries: any[] = [];

  constructor(private country: GetCountriesService, public dialog: MatDialog) {}

  ngOnInit() {
    this.country.getCountries().subscribe((data) => {
      this.countries = data.sort((a: any, b: any) => {
        const nameA = a.name?.official || '';
        const nameB = b.name?.official || '';
        return nameA.localeCompare(nameB);
      });
    });
  }

  openDialog(countryData: Country): void {
    const dialogRef = this.dialog.open(DetailCountryComponent, {
      width: '250px', 
      data: countryData,
      disableClose: false
    });
  
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
