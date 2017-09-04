import { Component, OnInit } from '@angular/core';
import { FilmotecaService } from '../../services/filmoteca.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public results = [];

  constructor(private filmotecaService: FilmotecaService) {
    this.results = this.filmotecaService.getMovies();
  }

  ngOnInit() {
  }

}
