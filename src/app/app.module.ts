import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './clientes/pages/lista-clientes/lista-clientes.component';
import { EditClientesComponent } from './clientes/pages/edit-clientes/edit-clientes.component';
import { ClientesComponent } from './clientes/components/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    EditClientesComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
