import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuPharmifyFormComponent } from './hu-pharmify-form.component';

describe('HuPharmifyFormComponent', () => {
  let component: HuPharmifyFormComponent;
  let fixture: ComponentFixture<HuPharmifyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuPharmifyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuPharmifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
