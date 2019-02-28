import { TestBed } from '@angular/core/testing';

import { JobpostsService } from './jobposts.service';

describe('JobpostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobpostsService = TestBed.get(JobpostsService);
    expect(service).toBeTruthy();
  });
});
