import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', // Home page route
    component: HomePageComponent,
  },
  {
    path: 'allcountries', // All countries route
    component: AllCountriesComponent,
  },
  {
    path: 'layout', // Layout route
    component: LayoutComponent,  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    // Smooth scroll to top when route changes
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.scrollToTop();
    });
  }

  private scrollToTop(): void {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTop();
  }
}
