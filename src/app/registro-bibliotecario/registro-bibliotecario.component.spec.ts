import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBibliotecarioComponent } from './registro-bibliotecario.component';

describe('RegistroBibliotecarioComponent', () => {
  let component: RegistroBibliotecarioComponent;
  let fixture: ComponentFixture<RegistroBibliotecarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroBibliotecarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroBibliotecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
