import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUApplicationListComponent } from './hu-application-list.component';

describe('HUApplicationListComponent', () => {
  let component: HUApplicationListComponent;
  let fixture: ComponentFixture<HUApplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUApplicationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
