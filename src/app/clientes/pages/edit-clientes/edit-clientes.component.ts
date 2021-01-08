import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.scss'],
})
export class EditClientesComponent implements OnInit {
  customer = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cpf: new FormControl('', [Validators.required]),
    birthDate: new FormControl(''),
    genre: new FormControl('', [Validators.required]),
    active: new FormControl(true),
    address: new FormGroup({
      type: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      street: new FormControl(''),
      number: new FormControl(''),
      complement: new FormControl(''),
      neighborhood: new FormControl(''),
    }),
    phones: new FormArray([]),
  });

  // Exemplo com formBuilder
  // customer = this.formBulder.group({
  //   name: ['', [Validators.required, Validators.minLength(2)]],
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

  get name(): FormControl { return this.customer.get('name') as FormControl; }
  get email(): FormControl { return this.customer.get('email') as FormControl; }
  get phones(): FormArray {
    return this.customer.get('phones') as FormArray;
  }

  getControl(controlName: string): FormControl {
    return this.customer.get(controlName) as FormControl;
  }

  get addressType(): FormControl {
    return this.customer.get('address').get('type') as FormControl;
  }

  getControlFromAddressGroup(controlName: string): FormControl {
    return this.customer.get('address').get(controlName) as FormControl;
  }

  getPhone(index: number): FormControl {
    return this.phones.at(index).get('phone') as FormControl;
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
        phone: new FormControl('', [Validators.required]),
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
    // limpa os campos
    this.customer.reset();

    // remove os telefones adicionados na tela
    this.phones.clear();
  }
}
