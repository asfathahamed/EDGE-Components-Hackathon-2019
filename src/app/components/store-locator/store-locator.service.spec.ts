import { TestBed, inject } from '@angular/core/testing';

import { StoreLocatorService } from './store-locator.service';

describe('StoreLocatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreLocatorService]
    });
  });

  it('should be created', inject([StoreLocatorService], (service: StoreLocatorService) => {
    expect(service).toBeTruthy();
  }));
});
