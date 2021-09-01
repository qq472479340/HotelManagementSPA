import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Customer } from 'src/app/shared/models/customer';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  customers!: Customer[]

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(c => this.customers = c)
  }

}
