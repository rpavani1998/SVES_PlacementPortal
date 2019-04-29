import { TestBed } from '@angular/core/testing';

import { EditjobpostService } from './editjobpost.service';

describe('EditjobpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditjobpostService = TestBed.get(EditjobpostService);
    expect(service).toBeTruthy();
  });
});
