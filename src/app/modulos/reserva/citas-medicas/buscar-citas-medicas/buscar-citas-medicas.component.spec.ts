import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCitasMedicasComponent } from './buscar-citas-medicas.component';

describe('BuscarCitasMedicasComponent', () => {
  let component: BuscarCitasMedicasComponent;
  let fixture: ComponentFixture<BuscarCitasMedicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarCitasMedicasComponent]
    });
    fixture = TestBed.createComponent(BuscarCitasMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
