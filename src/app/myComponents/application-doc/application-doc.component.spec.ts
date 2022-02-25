import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDocComponent } from './application-doc.component';

describe('ApplicationDocComponent', () => {
  let component: ApplicationDocComponent;
  let fixture: ComponentFixture<ApplicationDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
