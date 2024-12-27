import { TestBed } from '@angular/core/testing';

import { MyDataService } from './my-data-service.service';

describe('MyDataServiceService', () => {
  let service: MyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
