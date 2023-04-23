import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import {FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';

import { RouterModule } from '@angular/router';

import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProveedorService } from './proveedor/proveedor.service';
import{HttpClientModule} from '@angular/common/http';
import { RegistroUsuarioService } from './registro-usuario/registro-usuario.service';

import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormComponent } from './registro-usuario/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{PaginaInicioComponent}from './pagina-inicio/pagina-inicio.component';
import { RegistroBibliotecarioComponent } from './registro-bibliotecario/registro-bibliotecario.component'
import { PaginaInicioService } from './pagina-inicio/pagina-inicio.service';
import { ListaBibliotecariosComponent } from './lista-bibliotecarios/lista-bibliotecarios.component';
import { ListasComponent } from './listas/listas.component';
import { ListaSolicitudesPendientesComponent } from './lista-solicitudes-pendientes/lista-solicitudes-pendientes.component';
import { RegistroLibroComponent } from './registro-libro/registro-libro.component';
import { PersonaService } from './inicio-sesion/persona.service';
import { FormComponentb } from './registro-bibliotecario/form.component';
import { RegistroLibroService } from './registro-libro/registro-libro.service';
import { SolicitudLibroComponent } from './solicitud-libro/solicitud-libro.component';
import { FormEditComponent } from './registro-usuario/form-edit.component';
import { FormEditBComponent } from './registro-bibliotecario/form-edit-b.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DevolverLibroComponent } from './devolver-libro/devolver-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ProveedorComponent,
    RegistroUsuarioComponent,
    InicioSesionComponent,
    FormComponent,
    FormComponentb,
    PaginaInicioComponent,
    RegistroBibliotecarioComponent,
    ListaBibliotecariosComponent,
    ListasComponent,
    ListaSolicitudesPendientesComponent,
    RegistroLibroComponent,
    SolicitudLibroComponent,
    FormEditComponent,
    FormEditBComponent,
    DevolverLibroComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'app-directiva', component: DirectivaComponent},
      {path: 'app-devolver-libro', component: DevolverLibroComponent},
      {path: 'app-proveedor', component: ProveedorComponent},
      {path: 'app-registro-usuario', component: RegistroUsuarioComponent},
      {path: '', component: InicioSesionComponent,pathMatch:'full'},
      {path: 'app-form', component: FormComponent},
      {path: 'app-form-bibliotecario', component: FormComponentb},
      {path: 'app-form-editBibliotecario', component: FormEditBComponent},
      {path: 'app-form-editUsuario', component: FormEditComponent},
      {path: 'app-pagina-inicio', component: PaginaInicioComponent},
      {path: 'app-registro-bibliotecario', component: RegistroBibliotecarioComponent},
      {path: 'app-lista-bibliotecarios', component: ListaBibliotecariosComponent},
      {path: 'app-listas', component: ListasComponent},
      {path: 'registro-libro', component: RegistroLibroComponent},
      {path: 'app-lista-solicitudes-pendientes', component: ListaSolicitudesPendientesComponent},
      {path: 'app-solicitud-libro', component: SolicitudLibroComponent},
      
    ]),
  ],
  providers: [RegistroUsuarioService, PaginaInicioService, PersonaService,RegistroLibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
