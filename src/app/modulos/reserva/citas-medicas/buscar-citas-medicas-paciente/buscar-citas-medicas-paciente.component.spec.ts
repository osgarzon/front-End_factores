import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCitasMedicasPacienteComponent } from './buscar-citas-medicas-paciente.component';

describe('BuscarCitasMedicasPacienteComponent', () => {
  let component: BuscarCitasMedicasPacienteComponent;
  let fixture: ComponentFixture<BuscarCitasMedicasPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarCitasMedicasPacienteComponent]
    });
    fixture = TestBed.createComponent(BuscarCitasMedicasPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
