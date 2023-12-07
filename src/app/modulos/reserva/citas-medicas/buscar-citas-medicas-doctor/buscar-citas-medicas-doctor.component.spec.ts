import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCitasMedicasDoctorComponent } from './buscar-citas-medicas-doctor.component';

describe('BuscarCitasMedicasDoctorComponent', () => {
  let component: BuscarCitasMedicasDoctorComponent;
  let fixture: ComponentFixture<BuscarCitasMedicasDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarCitasMedicasDoctorComponent]
    });
    fixture = TestBed.createComponent(BuscarCitasMedicasDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
