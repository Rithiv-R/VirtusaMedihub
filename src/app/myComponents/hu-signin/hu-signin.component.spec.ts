import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuSigninComponent } from './hu-signin.component';

describe('HuSigninComponent', () => {
  let component: HuSigninComponent;
  let fixture: ComponentFixture<HuSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
