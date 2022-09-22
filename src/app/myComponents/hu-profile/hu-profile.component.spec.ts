import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUProfileComponent } from './hu-profile.component';

describe('HUProfileComponent', () => {
  let component: HUProfileComponent;
  let fixture: ComponentFixture<HUProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
