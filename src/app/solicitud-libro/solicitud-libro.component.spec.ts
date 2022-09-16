import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudLibroComponent } from './solicitud-libro.component';

describe('SolicitudLibroComponent', () => {
  let component: SolicitudLibroComponent;
  let fixture: ComponentFixture<SolicitudLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
