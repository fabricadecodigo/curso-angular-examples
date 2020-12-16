import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditClientesComponent } from './pages/edit-clientes/edit-clientes.component';

const routes: Routes = [
  { path: 'new', component: EditClientesComponent },
  { path: 'edit/:id', component: EditClientesComponent },
  { path: '', component: ListaClientesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
