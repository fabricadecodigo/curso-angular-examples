import { ClienteRepositoryService } from './../../services/cliente-repository.service';
import { ICustomer } from './../../entities/icustomer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
})
export class ListaClientesComponent implements OnInit {
  clientes: ICustomer[] = [];
  page = 1;

  constructor(
    private clienteRepositoryService: ClienteRepositoryService
  ) {}

  // Exemplo 1
  // ngOnInit(): void {
  //   this.getAllCustomers();
  // }

  // getAllCustomers(page?: number) {
  //   const pageToGet = page ? page.toString() : '';
  //   this.clienteRepositoryService.getAll(pageToGet).subscribe(response => this.clientes = response);
  // }

  // paginaAnterior(): void {
  //   this.page--;
  //   this.getAllCustomers(this.page);
  // }

  // proximaPagina(): void {
  //   this.page++;
  //   this.getAllCustomers(this.page);
  // }

  // deleteCliente(customer: ICustomer): void {
  //   this.clienteRepositoryService.delete(customer.id)
  //     .subscribe(() => {
  //       this.clientes.splice(this.clientes.indexOf(customer), 1);
  //     });
  // }

  // Exemplo 2
  async ngOnInit(): Promise<void> {
    await this.getAllCustomers();
  }

  async getAllCustomers(page?: number): Promise<void>  {
    try {
      const pageToGet = page ? page.toString() : '';
      this.clientes = await this.clienteRepositoryService.getAll(pageToGet);
    } catch (error) {
      console.error(error);
    }
  }

  async paginaAnterior(): Promise<void> {
    this.page--;
    await this.getAllCustomers(this.page);
  }

  async proximaPagina(): Promise<void> {
    this.page++;
    await this.getAllCustomers(this.page);
  }

  async deleteCliente(customer: ICustomer): Promise<void> {
    try {
      await this.clienteRepositoryService.delete(customer.id);
      this.clientes.splice(this.clientes.indexOf(customer), 1);
    } catch (error) {
      console.error(error);
    }
  }
}
