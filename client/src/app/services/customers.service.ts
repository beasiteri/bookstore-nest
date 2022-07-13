import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private httpClient: HttpClient) { }

  getAllCustomers() {
    return this.httpClient.get('http://localhost:5000/customers');
  }

  getCustomerById(id) {
    return this.httpClient.get(`http://localhost:5000/customers/${id}`);
  }

  deleteCustomer(id) {
    return this.httpClient.delete(`http://localhost:5000/customers/${id}`);
  }
}
