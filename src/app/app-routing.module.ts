import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/components/clientes/clientes.component';
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
  },


  // Exemplo 3
  {
    path: 'clientes-layout',
    component: ClientesComponent,
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
