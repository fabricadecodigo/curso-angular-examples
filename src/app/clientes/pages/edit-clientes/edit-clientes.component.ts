import { ICustomer } from './../../models/icustomer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.scss'],
})
export class EditClientesComponent implements OnInit {
  id: number;
  customer: ICustomer;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.initForm();

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.id = Number(id);
    }
  }

  getPhoneIdAndName(index: number): string {
    return `phone[${index}]`;
  }

  btnAddPhoneClick(): void {
    this.customer.phones.push({ });
  }

  btnRemovePhoneClick(index: number): void {
    this.customer.phones.splice(index, 1);
  }

  initForm(): void {
    this.customer = {
      active: true,
      address: {},
      phones: [],
    };
  }

  onSubmit(): void {
    console.log(this.customer);
    this.initForm();
  }
}
