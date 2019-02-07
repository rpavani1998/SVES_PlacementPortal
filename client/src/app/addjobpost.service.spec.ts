import { TestBed } from '@angular/core/testing';

import { AddjobpostService } from './addjobpost.service';

describe('AddjobpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddjobpostService = TestBed.get(AddjobpostService);
    expect(service).toBeTruthy();
  });
});
