import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUContactFormComponent } from './hu-contact-form.component';

describe('HUContactFormComponent', () => {
  let component: HUContactFormComponent;
  let fixture: ComponentFixture<HUContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
