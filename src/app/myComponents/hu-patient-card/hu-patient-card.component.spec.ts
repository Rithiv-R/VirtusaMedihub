import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuPatientCardComponent } from './hu-patient-card.component';

describe('HuPatientCardComponent', () => {
  let component: HuPatientCardComponent;
  let fixture: ComponentFixture<HuPatientCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuPatientCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuPatientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
