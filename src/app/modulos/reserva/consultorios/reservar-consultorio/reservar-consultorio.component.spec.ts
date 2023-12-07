import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservarConsultorioComponent } from './reservar-consultorio.component';


describe('ReservarConsultorioComponent', () => {
  let component: ReservarConsultorioComponent;
  let fixture: ComponentFixture<ReservarConsultorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservarConsultorioComponent]
    });
    fixture = TestBed.createComponent(ReservarConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
