import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private httpClient: HttpClient) { }

  getAllCustomers() {
    return this.httpClient.get('/customers');
  }

  deleteCustomer(id) {
    return this.httpClient.delete(`/customers/${id}`);
  }
}
