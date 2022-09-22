import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuSelectComponent } from './hu-select.component';

describe('HuSelectComponent', () => {
  let component: HuSelectComponent;
  let fixture: ComponentFixture<HuSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
