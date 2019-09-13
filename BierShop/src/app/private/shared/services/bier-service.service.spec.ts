import { TestBed, inject } from '@angular/core/testing';

import { BierServiceService } from './bier-service.service';

describe('BierServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BierServiceService]
    });
  });

  it('should be created', inject([BierServiceService], (service: BierServiceService) => {
    expect(service).toBeTruthy();
  }));
});
