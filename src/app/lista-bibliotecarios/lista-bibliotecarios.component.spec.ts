import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBibliotecariosComponent } from './lista-bibliotecarios.component';

describe('ListaBibliotecariosComponent', () => {
  let component: ListaBibliotecariosComponent;
  let fixture: ComponentFixture<ListaBibliotecariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaBibliotecariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBibliotecariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
