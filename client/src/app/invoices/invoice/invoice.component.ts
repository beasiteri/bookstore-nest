import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../../services/invoices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceId: string;
  invoice;

  constructor(private service: InvoicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.invoiceId = this.route.snapshot.params.id;
    this.service.getInvoiceById(this.invoiceId)
    .subscribe(response => {
      const result = [response];
      this.invoice = result[0]['invoiceById'];
    });
  }

}
