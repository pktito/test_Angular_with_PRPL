import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpCacheModule } from 'ng-http-cache';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmotecaService } from './services/filmoteca.service';
import { SeriesModule } from './components/series/series.module';
import { MoviesModule } from './components/movies/movies.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpCacheModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full'},
      { path: 'movies', loadChildren: './components/movies/movies.module#MoviesModule'},
      { path: 'series', loadChildren: './components/series/series.module#SeriesModule'}
    ]),
    SeriesModule,
    MoviesModule
  ],
  providers: [FilmotecaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
