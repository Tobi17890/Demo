import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Country } from '../Interface/country';
import { GetCountriesService } from '../Service/get-countries.service';
import { DetailCountryComponent } from '../detail-country/detail-country.component';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  display: boolean = true;
  currentPage = 1;
  itemsPerPage = 25;
  searchTerm: string = ''; 
  allCountries: any[] = []; 
  sortedData: any[] = []; 
  searchTermChanged = new Subject<any>();
  searchTermSubscription!: Subscription;

  constructor(private Http: HttpClient, private country: GetCountriesService, public dialog: MatDialog) {}

  ngOnInit() {
    this.country.getCountries().subscribe((data) => {      
      this.allCountries = data;
      this.updatePage();
    });

    this.searchTermSubscription = this.searchTermChanged.pipe(
      debounceTime(300) 
    ).subscribe(newSearchTerm => {
      this.searchTerm = newSearchTerm;
      this.updatePage();
    });
  }

  updatePage(): void {
    const filteredCountries = this.allCountries.filter(country => 
      country.name.official.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.sortedData = filteredCountries.slice(start, end);
  }
  

  sortAsc(): void {
    this.allCountries.sort((a: any, b: any) => {
      const nameA = a.name?.official || '';
      const nameB = b.name?.official || '';
      return nameA.localeCompare(nameB);
    });
    this.updatePage();
  }

  sortDesc(): void {
    this.allCountries.sort((a: any, b: any) => {
      const nameA = a.name?.official || '';
      const nameB = b.name?.official || '';
      return nameB.localeCompare(nameA); 
    });
    this.updatePage();
  }

  changePage(newPage: number): void {
    this.currentPage = newPage;
    this.updatePage();
  }

  nextPage(): void {
    this.currentPage++;
    this.updatePage();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }
  openDialog(countryData: Country): void {
    const dialogRef = this.dialog.open(DetailCountryComponent, {
      width: '250px', 
      data: countryData, 
      disableClose: false
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
  ngOnDestroy() {
    this.searchTermSubscription.unsubscribe();
  }
  
}
