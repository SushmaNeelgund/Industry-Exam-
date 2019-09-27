import { TestBed } from '@angular/core/testing';

import { EmployeedataService } from './employeedata.service';

describe('EmployeedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeedataService = TestBed.get(EmployeedataService);
    expect(service).toBeTruthy();
  });
});
