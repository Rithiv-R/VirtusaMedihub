import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqQuesComponent } from './faq-ques.component';

describe('FaqQuesComponent', () => {
  let component: FaqQuesComponent;
  let fixture: ComponentFixture<FaqQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqQuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
