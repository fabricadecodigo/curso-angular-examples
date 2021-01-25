import { Component, OnInit } from '@angular/core';
import { ICustomer } from './../../entities/icustomer';
import { ClienteRepositoryService } from './../../services/cliente-repository.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
})
export class ListaClientesComponent implements OnInit {
  clientes: ICustomer[] = [];

  constructor(private clienteRepositoryService: ClienteRepositoryService) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(): void {
    try {
      this.clientes = this.clienteRepositoryService.getAll();
    } catch (error) {
      console.error(error);
    }
  }

  deleteCliente(customer: ICustomer): void {
    try {
      this.clienteRepositoryService.delete(customer);
    } catch (error) {
      console.error(error);
    }
  }
}
