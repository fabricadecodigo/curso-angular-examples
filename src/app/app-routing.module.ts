import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditClientesComponent } from './clientes/pages/edit-clientes/edit-clientes.component';
import { ListaClientesComponent } from './clientes/pages/lista-clientes/lista-clientes.component';

const routes: Routes = [
  // Exemplo 1
  {
    path: '',
    children: [
      { path: '', component: ListaClientesComponent },
      { path: 'new', component: EditClientesComponent },
      { path: 'edit/:id', component: EditClientesComponent },
    ],
  },

  // Exemplo 2
  {
    path: 'clientes',
    children: [
      { path: '', component: ListaClientesComponent },
      { path: 'new', component: EditClientesComponent },
      { path: 'edit/:id', component: EditClientesComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
