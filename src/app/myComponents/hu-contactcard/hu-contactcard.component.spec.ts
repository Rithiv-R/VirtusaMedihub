import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUContactcardComponent } from './hu-contactcard.component';

describe('HUContactcardComponent', () => {
  let component: HUContactcardComponent;
  let fixture: ComponentFixture<HUContactcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUContactcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUContactcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
