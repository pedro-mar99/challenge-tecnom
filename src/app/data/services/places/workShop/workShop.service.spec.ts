import { TestBed } from '@angular/core/testing';

import { WorkShopService } from './workShop.service';

describe('WorkShopsService', () => {
  let service: WorkShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
