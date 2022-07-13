import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerId: string;
  customer;

  constructor(private service: CustomersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params.id;
    this.service.getCustomerById(this.customerId)
    .subscribe(response => {
      const result = [response];
      this.customer = result[0]['customerById'];
    });
  }

}
