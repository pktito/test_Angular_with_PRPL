import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesComponent } from './series.component';
import { FilmotecaService } from '../../services/filmoteca.service';
import { HttpModule } from '@angular/http';

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpModule],
      declarations: [ SeriesComponent ],
      providers : [FilmotecaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
