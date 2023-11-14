import { TestBed } from '@angular/core/testing';

import { ExcursionsResolverService } from './excursions-resolver.service';

describe('ExcursionsResolverService', () => {
  let service: ExcursionsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcursionsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
