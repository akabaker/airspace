import { TestBed, inject } from '@angular/core/testing';

import { DisclosurerequestsService } from './disclosurerequests.service';

describe('DisclosurerequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisclosurerequestsService]
    });
  });

  it('should be created', inject([DisclosurerequestsService], (service: DisclosurerequestsService) => {
    expect(service).toBeTruthy();
  }));
});
