import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuApplicationItemRjComponent } from './hu-application-item-rj.component';

describe('HuApplicationItemRjComponent', () => {
  let component: HuApplicationItemRjComponent;
  let fixture: ComponentFixture<HuApplicationItemRjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuApplicationItemRjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuApplicationItemRjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
