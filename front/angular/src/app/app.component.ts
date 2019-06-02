import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'nerdflix';
  private movies = [
    {
      id: 1,
      name: 'Lorem Ipsum',
      img: null,
      text: null,
    },
    {
      id: 2,
      name: 'Lorem Ipsum',
      img: null,
      text: null,
    },
    {
      id: 3,
      name: 'Lorem Ipsum',
      img: null,
      text: null,
    },
    {
      id: 4,
      name: 'Lorem Ipsum',
      img: null,
      text: null,
    },
    {
      id: 5,
      name: 'Lorem Ipsum',
      img: null,
      text: null,
    }
  ]
  public catalog = {
    bests: [

    ],
    others: [
      {
        category: 'Ação',
        movies: this.movies
      },
      {
        category: 'Aventura',
        movies: this.movies
      },
      {
        category: 'Drama',
        movies: this.movies
      }
    ]
  }
}
