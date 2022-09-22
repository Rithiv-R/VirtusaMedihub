import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUNavbarComponent } from './hu-navbar.component';

describe('HUNavbarComponent', () => {
  let component: HUNavbarComponent;
  let fixture: ComponentFixture<HUNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
