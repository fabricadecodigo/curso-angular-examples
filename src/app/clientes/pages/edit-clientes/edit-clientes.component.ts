import { ICustomer } from './../../entities/icustomer';
import { ClienteRepositoryService } from './../../services/cliente-repository.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  // Exemplo 1
  // ngOnInit(): void {
  //   const idParam = this.activatedRoute.snapshot.paramMap.get('id');
  //   if (idParam) {
  //     this.getCustomer(parseInt(idParam));
  //   }
  // }

  // getCustomer(id: number) {
  //   this.clienteRepositoryService.getById(id).subscribe((response) => {
  //     this.customer.patchValue({
  //       name: response.name,
  //       email: response.email,
  //     });
  //     this.id = id;
  //   });
  // }

  // onSubmit(): void {
  //   try {
  //     if (this.id) {
  //       const data = {
  //         id: this.id,
  //         ...this.customer.value
  //       };

  //       this.clienteRepositoryService
  //         .update(data)
  //         .subscribe(response => {
  //           console.log(response);
  //         });
  //     } else {
  //       this.clienteRepositoryService
  //         .insert(this.customer.value)
  //         .subscribe((response) => {
  //           console.log(response);
  //           this.id = response.id;
  //         });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // Exemplo 2
  async ngOnInit(): Promise<void> {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      await this.getCustomer(parseInt(idParam));
    }
  }

  async getCustomer(id: number): Promise<void> {
    try {
      const response = await this.clienteRepositoryService.getById(id);

      this.customer.patchValue({
        name: response.name,
        email: response.email,
      });
      this.id = id;
    } catch (error) {
      console.error(error);
    }
  }

  async onSubmit(): Promise<void> {
    try {
      if (this.id) {
        const data: ICustomer = {
          id: this.id,
          ...this.customer.value
        };

        const response = await this.clienteRepositoryService
          .update(data);

        console.log(response);
      } else {
        const response = await this.clienteRepositoryService
          .insert(this.customer.value);

        console.log(response);
        this.id = response.id;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
