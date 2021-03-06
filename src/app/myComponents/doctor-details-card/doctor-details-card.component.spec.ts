import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailsCardComponent } from './doctor-details-card.component';

describe('DoctorDetailsCardComponent', () => {
  let component: DoctorDetailsCardComponent;
  let fixture: ComponentFixture<DoctorDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
