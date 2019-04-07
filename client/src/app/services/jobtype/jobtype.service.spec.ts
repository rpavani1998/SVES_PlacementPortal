import { TestBed } from '@angular/core/testing';

import { JobTypeService } from './jobtype.service';

describe('JobtypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobTypeService = TestBed.get(JobTypeService);
    expect(service).toBeTruthy();
  });
});


 