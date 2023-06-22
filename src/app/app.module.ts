import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { RouterModule } from '@angular/router';
import{HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { RegistroUsuarioService } from './services/registro-usuario.service';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormComponent } from './registro-usuario/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroBibliotecarioComponent } from './registro-bibliotecario/registro-bibliotecario.component'
import { PaginaInicioService } from './services/pagina-inicio.service';
import { ListaBibliotecariosComponent } from './lista-bibliotecarios/lista-bibliotecarios.component';
import { ListasComponent } from './listas/listas.component';
import { ListaSolicitudesPendientesComponent } from './lista-solicitudes-pendientes/lista-solicitudes-pendientes.component';
import { PersonaService } from './services/persona.service';
import { FormComponentb } from './registro-bibliotecario/form.component';
import { RegistroLibroService } from './services/registro-libro.service';
import { SolicitudLibroComponent } from './solicitud-libro/solicitud-libro.component';
import { FormEditComponent } from './registro-usuario/form-edit.component';
import { FormEditBComponent } from './registro-bibliotecario/form-edit-b.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DevolverLibroComponent } from './devolver-libro/devolver-libro.component';
import { VistaRegistroNewComponent } from './vista-registro-new/vista-registro-new.component';
import { HomeComponent } from './home/home/home.component';
import { ReporteLibrosComponent } from './reporte-libros/reporte-libros.component';
import { ReporteSugerenciasComponent } from './reporte-sugerencias/reporte-sugerencias.component';
import { SolicitudLibroDomicilioComponent } from './solicitud-libro-domicilio/solicitud-libro-domicilio.component';
import { LibraryInterceptor } from './interceptor/library.interceptor';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DirectivaComponent,
    HeaderComponent,
    RegistroUsuarioComponent,
    InicioSesionComponent,
    FormComponent,
    FormComponentb,
    RegistroBibliotecarioComponent,
    ListaBibliotecariosComponent,
    ListasComponent,
    ListaSolicitudesPendientesComponent,
    SolicitudLibroComponent,
    FormEditComponent,
    FormEditBComponent,
    DevolverLibroComponent,
    VistaRegistroNewComponent,
    HomeComponent,
    ReporteLibrosComponent,
    ReporteSugerenciasComponent,
    SolicitudLibroDomicilioComponent,

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
      {path: 'app-registro-usuario', component: RegistroUsuarioComponent},
      {path: 'app-reporte-sugerencias', component: ReporteSugerenciasComponent},
      {path: 'app-reporte-libros', component: ReporteLibrosComponent},
      {path: '', component: InicioSesionComponent,pathMatch:'full'},
      {path: 'app-form', component: FormComponent},
      {path: 'app-form-bibliotecario', component: FormComponentb},
      {path: 'app-form-editBibliotecario', component: FormEditBComponent},
      {path: 'app-form-editUsuario', component: FormEditComponent},
      {path: 'app-home', component: HomeComponent},
      {path: 'app-registro-bibliotecario', component: RegistroBibliotecarioComponent},
      {path: 'app-lista-bibliotecarios', component: ListaBibliotecariosComponent},
      {path: 'app-listas', component: ListasComponent},
      {path: 'app-lista-solicitudes-pendientes', component: ListaSolicitudesPendientesComponent},
      {path: 'app-solicitud-libro', component: SolicitudLibroComponent},
      {path: 'app-solicitud-libro-domicilio', component: SolicitudLibroDomicilioComponent},
      {path: 'app-vista-registro-new', component: VistaRegistroNewComponent},
      
    ]),
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
  ],
  providers: [
    RegistroUsuarioService,
    PaginaInicioService,
    PersonaService,
    RegistroLibroService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LibraryInterceptor,
      multi: true
    },
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
