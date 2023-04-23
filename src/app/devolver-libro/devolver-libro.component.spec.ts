import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolverLibroComponent } from './devolver-libro.component';

describe('DevolverLibroComponent', () => {
  let component: DevolverLibroComponent;
  let fixture: ComponentFixture<DevolverLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolverLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolverLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
