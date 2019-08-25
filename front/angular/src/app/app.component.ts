import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MoviesApiService } from '../services/api/movies';
import { MoviesTypesApiService } from '../services/api/movies-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  data = {
    banners:[],
    catalog:[]
  }

  constructor(
    config: NgbCarouselConfig, 
    private moviesApiService: MoviesApiService,
    private moviesTypesApiService: MoviesTypesApiService
    ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.init();
  }

  showMovie = {
    index: null,
    movie: null,
  }

  async init(){
    const dataBanners = await this.moviesApiService.execute();
    const dataCatalog = await this.moviesTypesApiService.execute();
    this.data.banners = dataBanners.result;
    this.data.catalog = Object.keys(dataCatalog.result).map(item => dataCatalog.result[item]);
  }

  selected(index: number, movie: object) {
    this.showMovie = { index, movie };
    //window.document.getElementsByClassName('active-movie')[0].scrollIntoView();
  }

  hasShowMovie(i: number) {
    return (this.showMovie.index == i);
  }
}
