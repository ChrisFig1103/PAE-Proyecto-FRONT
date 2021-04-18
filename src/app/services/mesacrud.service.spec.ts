import { TestBed } from '@angular/core/testing';

import { MesacrudService } from './mesacrud.service';

describe('MesacrudService', () => {
  let service: MesacrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesacrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
