import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuApplicationItemAcComponent } from './hu-application-item-ac.component';

describe('HuApplicationItemAcComponent', () => {
  let component: HuApplicationItemAcComponent;
  let fixture: ComponentFixture<HuApplicationItemAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuApplicationItemAcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuApplicationItemAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
