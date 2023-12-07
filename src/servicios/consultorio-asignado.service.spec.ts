import { TestBed } from '@angular/core/testing';

import { ConsultorioAsignadoService } from './consultorio-asignado.service';

describe('ConsultorioAsignadoService', () => {
  let service: ConsultorioAsignadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultorioAsignadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
