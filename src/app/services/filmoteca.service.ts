import { Injectable } from '@angular/core';
import * as CONST from '../constants';
import { Http } from '@angular/http';

@Injectable()
export class FilmotecaService {

  constructor(private http: Http) { }

  getMovies(): any {
    return this.callApi(CONST.MOVIES);
  }

  getSeries(): any {
    return this.callApi(CONST.SERIES);
  }

  callApi( endpoint: string ): any {
    let response = [];
    this.http.get(CONST.CONST_URL + endpoint).subscribe((resp) => {
      for (let key in resp) {
        response.push(resp[key]);
      }
    });
    console.log(endpoint, response);
    return response;
  }
}
