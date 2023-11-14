import { TestBed } from '@angular/core/testing';

import { BoughtExcursionsService } from './bought-excursions.service';

describe('BoughtExcursionsService', () => {
  let service: BoughtExcursionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoughtExcursionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
