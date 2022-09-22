import { TestBed } from '@angular/core/testing';

import { DoctorselectService } from './doctorselect.service';

describe('DoctorselectService', () => {
  let service: DoctorselectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorselectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
