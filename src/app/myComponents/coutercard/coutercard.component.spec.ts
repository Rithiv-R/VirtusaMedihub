import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutercardComponent } from './coutercard.component';

describe('CoutercardComponent', () => {
  let component: CoutercardComponent;
  let fixture: ComponentFixture<CoutercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
