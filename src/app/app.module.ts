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
<<<<<<< HEAD
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
=======
import { FormComponent } from './registro-usuario/form.component';
import { FormsModule } from '@angular/forms';
import { VentanaEmergenteComponent } from './inicio-sesion/ventana-emergente.component';
>>>>>>> 04bd54e39c2788c4c965b9a0b1b4c360131bb470
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ProveedorComponent,
    RegistroUsuarioComponent,
    InicioSesionComponent,
<<<<<<< HEAD
    PaginaInicioComponent
=======
    FormComponent,
    VentanaEmergenteComponent
>>>>>>> 04bd54e39c2788c4c965b9a0b1b4c360131bb470

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'app-directiva', component: DirectivaComponent},
      {path: 'app-proveedor', component: ProveedorComponent},
      {path: 'app-registro-usuario', component: RegistroUsuarioComponent},
      {path: 'app-inicio-sesion', component: InicioSesionComponent},
      {path: 'app-form', component: FormComponent},
      {path: 'app-ventana-emergente', component: VentanaEmergenteComponent},

    ]),
  ],
  providers: [RegistroUsuarioComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
