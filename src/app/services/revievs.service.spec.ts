import { TestBed } from '@angular/core/testing';

import { RevievsService } from './revievs.service';

describe('RevievsService', () => {
  let service: RevievsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevievsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
