import { TestBed } from '@angular/core/testing';

import { BoughtFilterService } from './bought-filter.service';

describe('BoughtFilterService', () => {
  let service: BoughtFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoughtFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
