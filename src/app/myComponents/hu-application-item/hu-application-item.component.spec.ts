import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUApplicationItemComponent } from './hu-application-item.component';

describe('HUApplicationItemComponent', () => {
  let component: HUApplicationItemComponent;
  let fixture: ComponentFixture<HUApplicationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUApplicationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUApplicationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
