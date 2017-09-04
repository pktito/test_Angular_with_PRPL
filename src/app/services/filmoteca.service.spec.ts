import { TestBed, inject } from '@angular/core/testing';

import { FilmotecaService } from './filmoteca.service';
import { HttpModule } from '@angular/http';

describe('FilmotecaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpModule],
      providers: [FilmotecaService]
    });
  });

  it('should be created', inject([FilmotecaService], (service: FilmotecaService) => {
    expect(service).toBeTruthy();
  }));
});
