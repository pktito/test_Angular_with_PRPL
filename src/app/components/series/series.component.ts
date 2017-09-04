import { Component, OnInit } from '@angular/core';
import { FilmotecaService } from '../../services/filmoteca.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public results = [];

  constructor(private filmotecaService: FilmotecaService) {
    this.results = this.filmotecaService.getSeries();
  }

  ngOnInit() {
  }
}
