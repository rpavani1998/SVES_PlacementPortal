import { TestBed } from '@angular/core/testing';

import { AddjobService } from './addjob.service';

describe('AddjobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddjobService = TestBed.get(AddjobService);
    expect(service).toBeTruthy();
  });
});
