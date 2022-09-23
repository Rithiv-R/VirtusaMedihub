import { TestBed } from '@angular/core/testing';

import { GetdocService } from './getdoc.service';

describe('GetdocService', () => {
  let service: GetdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
