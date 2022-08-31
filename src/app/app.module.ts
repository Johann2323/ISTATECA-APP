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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ProveedorComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'app-directiva', component: DirectivaComponent},
      {path: 'app-clientes', component: ClientesComponent},
      {path: 'app-proveedor', component: ProveedorComponent},
      {path: 'app-registro-usuario', component: RegistroUsuarioComponent},
<<<<<<< HEAD
     
      {path: 'app-inicio-sesion', component: InicioSesionComponent}
=======
>>>>>>> 16c4c1834e5e247a1a0c71c5e0de1d01b0c23e0d
      

    ]),
  ],
  providers: [ClienteService,ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
