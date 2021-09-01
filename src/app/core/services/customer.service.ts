import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerDetails } from 'src/app/shared/models/customer-details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get(environment.apiUrl + "customer")
      .pipe(
        map(resp => resp as Customer[])
      )
  }

  getCustomerById(id: number): Observable<CustomerDetails> {
    return this.http.get(environment.apiUrl + "customer/" + id)
      .pipe(
        map(resp => resp as CustomerDetails)
      )
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete(environment.apiUrl + "customer/" + id)
      .pipe(
        map(resp => resp as Customer)
      )
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post(environment.apiUrl + "customer", customer)
      .pipe(
        map(resp => resp as Customer)
      )
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put(environment.apiUrl + "customer", customer)
      .pipe(
        map(resp => resp as Customer)
      )
  }
}
