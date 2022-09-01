import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/headercomponent';

import {FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';

import { RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/clientes.service';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProveedorService } from './proveedor/proveedor.service';
import{HttpClientModule} from '@angular/common/http';

import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormComponent } from './registro-usuario/form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ProveedorComponent,
    RegistroUsuarioComponent,
    InicioSesionComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'app-directiva', component: DirectivaComponent},
      {path: 'app-clientes', component: ClientesComponent},
      {path: 'app-proveedor', component: ProveedorComponent},
      {path: 'app-registro-usuario', component: RegistroUsuarioComponent},
      {path: 'app-inicio-sesion', component: InicioSesionComponent},
      {path: 'app-form', component: FormComponent},

    ]),
  ],
  providers: [ClienteService,ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
