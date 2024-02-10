import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GetCountriesService } from './Service/get-countries.service';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CommonModule } from '@angular/common';
import { DetailCountryComponent } from './detail-country/detail-country.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AllCountriesComponent,
    DetailCountryComponent,
    FilterPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    CommonModule,
    FormsModule
  ],
  providers: [GetCountriesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
