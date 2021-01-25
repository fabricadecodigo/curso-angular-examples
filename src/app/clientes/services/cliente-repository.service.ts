import { environment } from './../../../environments/environment';
import { ICustomer } from './../entities/icustomer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteRepositoryService {
  constructor(private httpClient: HttpClient) {}

  // Exemplo 1
  // getAll(page?: string): Observable<ICustomer[]> {
  //   const params = new HttpParams()
  //     .append('_limit', '10')
  //     .append('_page', page ? page : '1');

  //   return this.httpClient.get<ICustomer[]>(`${environment.api}/customers`, {
  //     params,
  //   });
  // }

  // getById(id: number): Observable<ICustomer> {
  //   return this.httpClient.get<ICustomer>(`${environment.api}/customers/${id}`);
  // }

  // insert(customer: ICustomer): Observable<ICustomer> {
  //   const { id, ...data } = customer;

  //   return this.httpClient.post<ICustomer>(`${environment.api}/customers`, data);
  // }

  // update(customer: ICustomer): Observable<ICustomer> {
  //   const { id, ...data } = customer;

  //   return this.httpClient.put<ICustomer>(`${environment.api}/customers/${id}`, data);
  // }

  // Exemplo 2
  getAll(page?: string): Promise<ICustomer[]> {
    const params = new HttpParams()
      .append('_limit', '10')
      .append('_page', page ? page : '1');

    return this.httpClient
      .get<ICustomer[]>(`${environment.api}/customers`, {
        params,
      })
      .toPromise();
  }

  getById(id: number): Promise<ICustomer> {
    return this.httpClient
      .get<ICustomer>(`${environment.api}/customers/${id}`)
      .toPromise();
  }

  insert(customer: ICustomer): Promise<ICustomer> {
    const { id, ...data } = customer;

    return this.httpClient
      .post<ICustomer>(`${environment.api}/customers`, data)
      .toPromise();
  }

  update(customer: ICustomer): Promise<ICustomer> {
    const { id, ...data } = customer;

    return this.httpClient.put<ICustomer>(`${environment.api}/customers/${id}`, data)
      .toPromise();
  }
}
