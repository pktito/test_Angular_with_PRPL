import * as CONST from './constants';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poc Angular [PRPL]';
  connection: any;
  results: any;

  constructor( private http: HttpClient, private persistenceService: PersistenceService ) {
    this.getFilms();
  }

  private getFilms() {
    this.http.get(CONST.CONST_URL + CONST.FILM).subscribe(data => {
      this.apiSetToCache(CONST.FILM, data);
      this.connection = 'ONLINE';
      this.results = data;
    }, error => {
      console.log('Error');
      this.connection = 'OFFLINE';
      this.results = this.apiGetToCache(CONST.FILM);
    });
  }

  private apiSetToCache(endPoint, response) {
    this.persistenceService.set(endPoint, response, {type: StorageType.LOCAL});
  }

  private apiGetToCache(endPoint) {
    return this.persistenceService.get(endPoint, StorageType.LOCAL);
  }
}

