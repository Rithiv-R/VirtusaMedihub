import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidcardComponent } from './covidcard.component';

describe('CovidcardComponent', () => {
  let component: CovidcardComponent;
  let fixture: ComponentFixture<CovidcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
