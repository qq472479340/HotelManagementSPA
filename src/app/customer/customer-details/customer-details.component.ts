import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/core/services/customer.service';
import { CustomerDetails } from 'src/app/shared/models/customer-details';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerDetails!: CustomerDetails

  constructor(private customerService: CustomerService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id
    this.currentRoute.url.subscribe(u => id = u[1].path)
    id = Number(id)
    this.customerService.getCustomerById(id).subscribe(c => this.customerDetails = c)
  }

  deleteCustomer() {
    let id
    this.currentRoute.url.subscribe(u => id = u[1].path)
    id = Number(id)
    this.customerService.deleteCustomer(id).subscribe(resp => {
      if (resp) {
        this.router.navigate(['/customer'])
      }
    })
  }

}
