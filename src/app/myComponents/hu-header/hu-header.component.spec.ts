import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUHeaderComponent } from './hu-header.component';

describe('HUHeaderComponent', () => {
  let component: HUHeaderComponent;
  let fixture: ComponentFixture<HUHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
