import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuWelcomeComponent } from './hu-welcome.component';

describe('HuWelcomeComponent', () => {
  let component: HuWelcomeComponent;
  let fixture: ComponentFixture<HuWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
