import { TestBed } from '@angular/core/testing';

import { DynapiService } from './dynapi.service';


describe('DynapiService', () => {
  let service: DynapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
