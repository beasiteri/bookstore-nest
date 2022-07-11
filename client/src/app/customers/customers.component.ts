import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any;
  @ViewChild('customerId') customerId;

  constructor(private service: CustomersService) { }

  ngOnInit(): void {
    this.service.getAllCustomers()
    .subscribe(response => {
      const result = [response];
      this.customers = result[0]['customersData'];
    });
  }

  deleteCustomer(customerId) {
    this.service.deleteCustomer(customerId.innerText)
    .subscribe(() => {
      customerId.closest('.entity-content').remove();
    });
  }
}

