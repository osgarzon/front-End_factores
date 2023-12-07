import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCitasMedicasEspecialidadComponent } from './buscar-citas-medicas-especialidad.component';

describe('BuscarCitasMedicasEspecialidadComponent', () => {
  let component: BuscarCitasMedicasEspecialidadComponent;
  let fixture: ComponentFixture<BuscarCitasMedicasEspecialidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarCitasMedicasEspecialidadComponent]
    });
    fixture = TestBed.createComponent(BuscarCitasMedicasEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
