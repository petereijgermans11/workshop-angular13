import { TestBed } from '@angular/core/testing';

import { ServiceErgastF1Service } from './service-ergast-f1.service';

describe('ServiceErgastF1Service', () => {
  let service: ServiceErgastF1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceErgastF1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
