import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUNavbarSideComponent } from './hu-navbar-side.component';

describe('HUNavbarSideComponent', () => {
  let component: HUNavbarSideComponent;
  let fixture: ComponentFixture<HUNavbarSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUNavbarSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUNavbarSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
