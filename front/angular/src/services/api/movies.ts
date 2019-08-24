import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';


@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(
    private request: RequestService
  ) { }

  async execute(url: string = null) {
      return this.request.default('movies');
  }
}