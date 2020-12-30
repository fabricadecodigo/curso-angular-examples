import { ValidationModule } from './../shared/validations/validation.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientesRoutingModule } from './clientes-routing.module';
import { EditClientesComponent } from './pages/edit-clientes/edit-clientes.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';

@NgModule({
  declarations: [
    ListaClientesComponent,
    EditClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ValidationModule
  ]
})
export class ClientesModule { }
