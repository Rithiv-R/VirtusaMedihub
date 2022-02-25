import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalLocationComponent } from './hospital-location.component';

describe('HospitalLocationComponent', () => {
  let component: HospitalLocationComponent;
  let fixture: ComponentFixture<HospitalLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
