import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyuscardComponent } from './whyuscard.component';

describe('WhyuscardComponent', () => {
  let component: WhyuscardComponent;
  let fixture: ComponentFixture<WhyuscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyuscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyuscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
