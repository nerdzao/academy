import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nerdflix';
  showMovie = {
    index: null,
    movie: null,
  }
  data = [
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
  ]

  selected(index, movie) {
    this.showMovie = { index, movie }
  }
}
