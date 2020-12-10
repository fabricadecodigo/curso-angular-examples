import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/components/clientes/clientes.component';
import { EditClientesComponent } from './clientes/pages/edit-clientes/edit-clientes.component';
import { ListaClientesComponent } from './clientes/pages/lista-clientes/lista-clientes.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // Ordem das rotas
  // 1 rotas com path estatico
  // 2 rotas com parametros
  // 3 rotas vazias
  // 4 rotas coringa

  // Exemplo 1
  {
    path: '',
    children: [
      { path: 'dashboard', component: ListaClientesComponent },
      { path: 'new', component: EditClientesComponent },
      { path: 'edit/:id', component: EditClientesComponent },
      // Exemplo de redirecionamento
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ],
  },

  // Exemplo 2
  {
    path: 'clientes',
    children: [
      { path: 'new', component: EditClientesComponent },
      { path: 'edit/:id', component: EditClientesComponent },
      { path: '', component: ListaClientesComponent },
    ],
  },


  // Exemplo 3
  {
    path: 'clientes-layout',
    component: ClientesComponent,
    children: [
      { path: 'new', component: EditClientesComponent },
      { path: 'edit/:id', component: EditClientesComponent },
      { path: '', component: ListaClientesComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
