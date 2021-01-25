import { Injectable } from '@angular/core';
import { ICustomer } from './../entities/icustomer';

@Injectable({
  providedIn: 'root',
})
export class ClienteRepositoryService {
  customers: ICustomer[] = [
    { id: 1, name: 'George', email: 'george@gmail.com' },
    { id: 2, name: 'Janet', email: 'janet@gmail.com' },
    { id: 3, name: 'Emma', email: 'emma@gmail.com' },
    { id: 4, name: 'Eve', email: 'eve@gmail.com' },
    { id: 5, name: 'Charles', email: 'charles@gmail.com' },
    { id: 6, name: 'Tracey', email: 'tracey@gmail.com' },
    { id: 7, name: 'Michael', email: 'michael@gmail.com' },
    { id: 8, name: 'Lindsay', email: 'lindsay@gmail.com' },
    { id: 9, name: 'Tobias', email: 'tobias@gmail.com' },
    { id: 10, name: 'Byron', email: 'byron@gmail.com' },
    { id: 11, name: 'Rachel', email: 'rachel@gmail.com' },
    { id: 12, name: 'Romeu', email: 'romeu@gmail.com' },
    { id: 13, name: 'Micaela', email: 'micaela@gmail.com' },
    { id: 14, name: 'Bruna', email: 'bruna@gmail.com' },
    { id: 15, name: 'Rosa', email: 'rosa@gmail.com' },
  ];

  constructor() {}

  getAll(): ICustomer[] {
    return this.customers;
  }

  getById(id: number): ICustomer {
    return this.customers.find((customer) => customer.id === id);
  }

  insert(customer: ICustomer): ICustomer {
    const { id, ...data } = customer;

    const newCustomer = {
      id: this.customers.length + 1,
      ...data,
    };

    this.customers.push(newCustomer);

    return newCustomer;
  }

  update(customer: ICustomer): ICustomer {
    const index = this.customers.findIndex((c) => c.id === customer.id);
    if (index >= 0) {
      const newCustomer = { ...customer };;
      this.customers[index] = newCustomer;
      return newCustomer;
    }

    return null;
  }

  delete(customer: ICustomer): void {
    const index = this.customers.indexOf(customer);
    if (index >= 0) {
      this.customers.splice(index, 1);
    }
  }
}
