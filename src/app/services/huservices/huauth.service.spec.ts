import { TestBed } from '@angular/core/testing';

import { HuauthService } from './huauth.service';

describe('HuauthService', () => {
  let service: HuauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
