import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringCountriesComponent } from './filtering-countries.component';

describe('FilteringCountriesComponent', () => {
  let component: FilteringCountriesComponent;
  let fixture: ComponentFixture<FilteringCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteringCountriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteringCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
