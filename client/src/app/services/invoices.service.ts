import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private httpClient: HttpClient) { }

  getAllInvoices() {
    return this.httpClient.get('http://localhost:5000/invoices');
  }

  getInvoiceById(id) {
    return this.httpClient.get(`http://localhost:5000/invoices/${id}`);
  }

  deleteInvoice(id) {
    return this.httpClient.delete(`http://localhost:5000/invoices/${id}`);
  }
}
