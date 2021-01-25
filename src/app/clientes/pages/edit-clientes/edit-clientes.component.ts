import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from './../../entities/icustomer';
import { ClienteRepositoryService } from './../../services/cliente-repository.service';

@Component({
  selector: 'app-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.scss'],
})
export class EditClientesComponent implements OnInit {
  customer = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
  id: number;

  constructor(
    private clienteRepositoryService: ClienteRepositoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      this.getCustomer(parseInt(idParam));
    }
  }

  getCustomer(id: number): void {
    try {
      const response = this.clienteRepositoryService.getById(id);

      this.customer.patchValue({
        name: response.name,
        email: response.email,
      });
      this.id = id;
    } catch (error) {
      console.error(error);
    }
  }

  onSubmit(): void {
    try {
      if (this.id) {
        const data: ICustomer = {
          id: this.id,
          ...this.customer.value
        };

        const response = this.clienteRepositoryService
          .update(data);

        console.log(response);
      } else {
        const response = this.clienteRepositoryService
          .insert(this.customer.value);

        console.log(response);
        this.id = response.id;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
