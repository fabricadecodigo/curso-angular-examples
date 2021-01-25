import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {}
}
