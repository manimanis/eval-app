import { TestBed } from '@angular/core/testing';

import { LeconsService } from './lecons.service';

describe('LeconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeconsService = TestBed.get(LeconsService);
    expect(service).toBeTruthy();
  });
});
