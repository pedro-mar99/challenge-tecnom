import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionPuntajeComponent } from './opcion-puntaje.component';

describe('OpcionPuntajeComponent', () => {
  let component: OpcionPuntajeComponent;
  let fixture: ComponentFixture<OpcionPuntajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionPuntajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionPuntajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
