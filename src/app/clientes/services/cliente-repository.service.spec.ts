import { TestBed } from '@angular/core/testing';

import { ClienteRepositoryService } from './cliente-repository.service';

describe('ClienteRepositoryService', () => {
  let service: ClienteRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
