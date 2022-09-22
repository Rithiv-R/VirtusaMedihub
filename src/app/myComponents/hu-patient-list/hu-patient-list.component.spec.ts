import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuPatientListComponent } from './hu-patient-list.component';

describe('HuPatientListComponent', () => {
  let component: HuPatientListComponent;
  let fixture: ComponentFixture<HuPatientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuPatientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
