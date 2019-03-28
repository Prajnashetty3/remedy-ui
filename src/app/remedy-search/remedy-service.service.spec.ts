import { TestBed } from '@angular/core/testing';

import { RemedyServiceService } from './remedy-service.service';

describe('RemedyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemedyServiceService = TestBed.get(RemedyServiceService);
    expect(service).toBeTruthy();
  });
});
