import { TestBed } from '@angular/core/testing';

import { PhotoResolverService } from './photo-resolver.service';

describe('PhotoResolverService', () => {
  let service: PhotoResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
