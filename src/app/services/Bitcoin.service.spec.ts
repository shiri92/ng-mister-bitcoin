import { TestBed } from '@angular/core/testing';

import { BitcoinService } from './Bitcoin.service';

describe('BitcoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitcoinService = TestBed.get(BitcoinService);
    expect(service).toBeTruthy();
  });
});
