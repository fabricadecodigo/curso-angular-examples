import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditClientesComponent } from './clientes/pages/edit-clientes/edit-clientes.component';
import { ListaClientesComponent } from './clientes/pages/lista-clientes/lista-clientes.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: ListaClientesComponent },
      { path: 'new', component: EditClientesComponent },
      { path: 'edit/:id', component: EditClientesComponent },

      // Começando com parametro
      { path: ':id', component: EditClientesComponent },

      // Com mais de um parametro
      { path: 'edit/:id/:name', component: EditClientesComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ],
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
