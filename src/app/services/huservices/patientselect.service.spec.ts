import { TestBed } from '@angular/core/testing';

import { PatientselectService } from './patientselect.service';

describe('PatientselectService', () => {
  let service: PatientselectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientselectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
