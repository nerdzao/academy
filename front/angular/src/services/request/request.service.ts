import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private api = 'https://nerdflix.herokuapp.com/api/';

  constructor(
    private http: Http,
    private spinner: NgxSpinnerService
  ) { }

  request(url: string = null) {
    return new Promise((resolve, reject) => {
      this.http.request(url).subscribe(data => {
        resolve(data.json());
      }, (error => {
        reject(error);
      }));
    })
  }

  async default(url: string = null) {
    let response = { error: false, result: null }
    let urlRequest = this.api.concat(url);
    this.spinner.show();

    await this.request(urlRequest)
      .then(result => Object.assign(response, { result }))
      .catch(result => Object.assign(response, { error: true, result }))
      .finally(() => this.spinner.hide())

    return response;
  }
}