import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesHomeComponent } from './diseases-home.component';

describe('DiseasesHomeComponent', () => {
  let component: DiseasesHomeComponent;
  let fixture: ComponentFixture<DiseasesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseasesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
