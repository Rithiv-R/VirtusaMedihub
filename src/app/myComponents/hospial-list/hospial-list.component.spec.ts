import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospialListComponent } from './hospial-list.component';

describe('HospialListComponent', () => {
  let component: HospialListComponent;
  let fixture: ComponentFixture<HospialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospialListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
