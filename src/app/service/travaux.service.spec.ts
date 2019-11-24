import { TestBed } from '@angular/core/testing';

import { TravauxService } from './travaux.service';

describe('TravauxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravauxService = TestBed.get(TravauxService);
    expect(service).toBeTruthy();
  });
});
