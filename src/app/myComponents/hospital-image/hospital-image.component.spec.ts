import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalImageComponent } from './hospital-image.component';

describe('HospitalImageComponent', () => {
  let component: HospitalImageComponent;
  let fixture: ComponentFixture<HospitalImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
