import { TestBed } from '@angular/core/testing';

import { UserhospService } from './userhosp.service';

describe('UserhospService', () => {
  let service: UserhospService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserhospService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
