import { TestBed } from '@angular/core/testing';

import { ServiceInputService } from './service-input.service';

describe('ServiceInputService', () => {
  let service: ServiceInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
