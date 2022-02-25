import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDoctoHospitalComponent } from './application-docto-hospital.component';

describe('ApplicationDoctoHospitalComponent', () => {
  let component: ApplicationDoctoHospitalComponent;
  let fixture: ComponentFixture<ApplicationDoctoHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDoctoHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDoctoHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
