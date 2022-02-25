import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalContactComponent } from './hospital-contact.component';

describe('HospitalContactComponent', () => {
  let component: HospitalContactComponent;
  let fixture: ComponentFixture<HospitalContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
