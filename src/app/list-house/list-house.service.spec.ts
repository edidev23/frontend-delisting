import { TestBed } from '@angular/core/testing';

import { ListHouseService } from './list-house.service';

describe('ListHouseService', () => {
  let service: ListHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
