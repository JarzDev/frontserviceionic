import { TestBed } from '@angular/core/testing';

import { EquipsService } from './equips.service';

describe('EquipsService', () => {
  let service: EquipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
