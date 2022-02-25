import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinecardComponent } from './vaccinecard.component';

describe('VaccinecardComponent', () => {
  let component: VaccinecardComponent;
  let fixture: ComponentFixture<VaccinecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
