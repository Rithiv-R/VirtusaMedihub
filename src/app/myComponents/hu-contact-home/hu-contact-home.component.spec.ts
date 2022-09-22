import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUContactHomeComponent } from './hu-contact-home.component';

describe('HUContactHomeComponent', () => {
  let component: HUContactHomeComponent;
  let fixture: ComponentFixture<HUContactHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUContactHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUContactHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
