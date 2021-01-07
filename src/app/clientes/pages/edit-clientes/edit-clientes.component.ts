import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.scss'],
})
export class EditClientesComponent implements OnInit {
  customer = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    cpf: new FormControl(''),
    birthDate: new FormControl(''),
    genre: new FormControl(''),
    active: new FormControl(true),
    address: new FormGroup({
      type: new FormControl(''),
      cep: new FormControl(''),
      street: new FormControl(''),
      number: new FormControl(''),
      complement: new FormControl(''),
      neighborhood: new FormControl(''),
    }),
    phones: new FormArray([]),
  });

  // Exemplo com formBuilder
  // customer = this.formBulder.group({
  //   name: [''],
  //   email: [''],
  //   cpf: [''],
  //   birthDate: [''],
  //   genre: [''],
  //   active: [true],
  //   address: this.formBulder.group({
  //     type: [''],
  //     cep: [''],
  //     street: [''],
  //     number: [''],
  //     complement: [''],
  //     neighborhood: [''],
  //   }),
  //   phones: this.formBulder.array([]),
  // });

  constructor(private formBulder: FormBuilder) {}

  get phones(): FormArray {
    return this.customer.get('phones') as FormArray;
  }

  ngOnInit(): void {
    // Como atualizar os dados no formulário
    // this.customer.patchValue({
    //   name: 'Felipe',
    //   email: 'contato@fabricadecodigo.com'
    // });
  }

  getPhoneIdAndName(index: number): string {
    return `phone[${index}]`;
  }

  btnAddPhoneClick(): void {
    this.phones.push(
      new FormGroup({
        phone: new FormControl(''),
      })
    );

    // Exemplo com formBuilder
    // this.phones.push(
    //   this.formBulder.group({
    //     phone: [''],
    //   })
    // );
  }

  btnRemovePhoneClick(index: number): void {
    this.phones.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.customer.value);
  }
}
