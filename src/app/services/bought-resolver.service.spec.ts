import { TestBed } from '@angular/core/testing';

import { BoughtResolverService } from './bought-resolver.service';

describe('BoughtResolverService', () => {
  let service: BoughtResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoughtResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
