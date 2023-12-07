import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarConsultorioComponent } from './buscar-consultorio.component';

describe('BuscarConsultorioComponent', () => {
  let component: BuscarConsultorioComponent;
  let fixture: ComponentFixture<BuscarConsultorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarConsultorioComponent]
    });
    fixture = TestBed.createComponent(BuscarConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
