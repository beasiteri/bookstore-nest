import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private httpClient: HttpClient) { }

  getAllInvoices() {
    return this.httpClient.get('/invoices');
  }

  deleteInvoice(id) {
    return this.httpClient.delete(`/invoices/${id}`);
  }
}
