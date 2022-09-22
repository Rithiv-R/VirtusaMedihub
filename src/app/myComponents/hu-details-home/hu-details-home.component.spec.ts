import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUDetailsHomeComponent } from './hu-details-home.component';

describe('HUDetailsHomeComponent', () => {
  let component: HUDetailsHomeComponent;
  let fixture: ComponentFixture<HUDetailsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUDetailsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUDetailsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
