import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
})
export class ListaClientesComponent implements OnInit {
  clientes = [
    { id: 1, name: 'Cliente 1', email: 'cliente1@gmail.com' },
    { id: 2, name: 'Cliente 2', email: 'cliente2@gmail.com' },
    { id: 3, name: 'Cliente 3', email: 'cliente3@gmail.com' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
