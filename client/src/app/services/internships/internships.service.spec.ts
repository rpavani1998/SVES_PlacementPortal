import { TestBed } from '@angular/core/testing';

import { InternshipsService } from './internships.service';

describe('InternshipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternshipsService = TestBed.get(InternshipsService);
    expect(service).toBeTruthy();
  });
});
