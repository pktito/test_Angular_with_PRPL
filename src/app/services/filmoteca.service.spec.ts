import { TestBed, inject } from '@angular/core/testing';

import { FilmotecaService } from './filmoteca.service';

describe('FilmotecaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmotecaService]
    });
  });

  it('should be created', inject([FilmotecaService], (service: FilmotecaService) => {
    expect(service).toBeTruthy();
  }));
});
