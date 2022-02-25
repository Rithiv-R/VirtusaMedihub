import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesCardComponent } from './diseases-card.component';

describe('DiseasesCardComponent', () => {
  let component: DiseasesCardComponent;
  let fixture: ComponentFixture<DiseasesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseasesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
