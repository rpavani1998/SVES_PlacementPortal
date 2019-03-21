import { TestBed } from '@angular/core/testing';

import { JobPostsService } from './job-posts.service';


describe('JobPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobPostsService = TestBed.get(JobPostsService);
    expect(service).toBeTruthy();
  });
});