import { Component, ElementRef } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig, private elRef: ElementRef) {
    config.interval = 100000000000000000000;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  showMovie = {
    index: null,
    movie: null,
  }

  data = [
    {
      type: "Lançamentos",
      movies: [
        {
          
        },
      ],
    },
    {
      type: "Comédia",
      movies: [
        {

        }
      ],
    },
    {
      type: "Ação",
      movies: [
        {
          movie: ""
        }
      ],
    }
  ]

  selected(index: number, movie: object) {
    this.showMovie = !this.hasShowMovie(index) ? { index, movie } : { index: null, movie: null };
  }

  hasShowMovie(i: number) {
    return (this.showMovie.index == i);
  }
}
