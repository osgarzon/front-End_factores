import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEspecialidadComponent } from './buscar-especialidad.component';

describe('BuscarEspecialidadComponent', () => {
  let component: BuscarEspecialidadComponent;
  let fixture: ComponentFixture<BuscarEspecialidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarEspecialidadComponent]
    });
    fixture = TestBed.createComponent(BuscarEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
