import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationHosComponent } from './application-hos.component';

describe('ApplicationHosComponent', () => {
  let component: ApplicationHosComponent;
  let fixture: ComponentFixture<ApplicationHosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationHosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationHosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
