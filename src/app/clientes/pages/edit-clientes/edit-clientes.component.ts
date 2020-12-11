import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.scss'],
})
export class EditClientesComponent implements OnInit {
  id: number;
  name: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Exemplo: parametros do path
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const name = this.activatedRoute.snapshot.paramMap.get('name');

    // Exemplo parametro da query string
    // const id = this.activatedRoute.snapshot.queryParams['id'];
    // const name = this.activatedRoute.snapshot.queryParams['name']

    if (id) {
      this.id = Number(id);
    }

    this.name = name;

    // Exemplo com subscribe
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   const id = params.get('id');
    //   const name = params.get('name');

    //   if (id) {
    //     this.id = Number(id);
    //   }

    //   this.name = name;
    // });

    // this.activatedRoute.queryParamMap.subscribe((params) => {
    //   const id = params.get('id');
    //   const name = params.get('name');

    //   if (id) {
    //     this.id = Number(id);
    //   }

    //   this.name = name;
    // });
  }
}
