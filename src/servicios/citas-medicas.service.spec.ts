import { TestBed } from '@angular/core/testing';

import { CitasMedicasServiceTsService } from './citas-medicas.service';

describe('CitasMedicasServiceTsService', () => {
  let service: CitasMedicasServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitasMedicasServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
