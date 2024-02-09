import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  display: boolean = true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe((url) => {
      if (url[0]?.path === 'allcountries') {
        this.display = false;
      }
    });
  }
}
