import { TestBed } from '@angular/core/testing';

import { BasketResolverService } from './basket-resolver.service';

describe('BasketResolverService', () => {
  let service: BasketResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
