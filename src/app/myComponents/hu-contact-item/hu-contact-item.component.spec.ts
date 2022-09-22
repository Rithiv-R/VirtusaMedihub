import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUContactItemComponent } from './hu-contact-item.component';

describe('HUContactItemComponent', () => {
  let component: HUContactItemComponent;
  let fixture: ComponentFixture<HUContactItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUContactItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUContactItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
