import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {
  clienteId: number = 1;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  novoCliente() {
    this.router.navigate(['/new']);
  }

  editarCliente(id: number) {
    this.router.navigate(['/clientes', 'edit', id]);
  }
}
