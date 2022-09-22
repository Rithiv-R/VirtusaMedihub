import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUDetailsFormComponent } from './hu-details-form.component';

describe('HUDetailsFormComponent', () => {
  let component: HUDetailsFormComponent;
  let fixture: ComponentFixture<HUDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
