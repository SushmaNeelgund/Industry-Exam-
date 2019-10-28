import { TestBed } from '@angular/core/testing';

import { EmployeeGuardService } from './employee-guard.service';

describe('EmployeeGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeGuardService = TestBed.get(EmployeeGuardService);
    expect(service).toBeTruthy();
  });
});
