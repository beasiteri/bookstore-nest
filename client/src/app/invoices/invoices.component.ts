import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoicesService } from '../services/invoices.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices: any;
  @ViewChild('invoiceId') invoiceId;

  constructor(private service: InvoicesService) { }

  ngOnInit(): void {
    this.service.getAllInvoices()
    .subscribe(response => {
      const result = [response];
      this.invoices = result[0]['invoicesData'];
    });
  }

  deleteInvoice(invoiceId) {
    this.service.deleteInvoice(invoiceId.innerText)
    .subscribe(() => {
      invoiceId.closest('.entity-content').remove();
    });
  }
}
