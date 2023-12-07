import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarConsultorioAsignadoComponent } from './buscar-consultorio-asignado.component';

describe('BuscarConsultorioAsignadoComponent', () => {
  let component: BuscarConsultorioAsignadoComponent;
  let fixture: ComponentFixture<BuscarConsultorioAsignadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarConsultorioAsignadoComponent]
    });
    fixture = TestBed.createComponent(BuscarConsultorioAsignadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
