import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUUserComponent } from './hu-user.component';

describe('HUUserComponent', () => {
  let component: HUUserComponent;
  let fixture: ComponentFixture<HUUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
