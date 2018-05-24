import { TestBed, inject } from '@angular/core/testing';

import { LocatorService } from './locator.service';

describe('LocatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocatorService]
    });
  });

  it('should be created', inject([LocatorService], (service: LocatorService) => {
    expect(service).toBeTruthy();
  }));
});
