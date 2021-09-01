import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/core/services/customer.service';
import { RoomService } from 'src/app/core/services/room.service';
import { Customer } from 'src/app/shared/models/customer';
import { Room } from 'src/app/shared/models/room';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = {
    id: 0,
    roomId: 0,
    cName: '',
    address: '',
    phone: '',
    email: '',
    checkIn: new Date(Date()),
    totalPersons: 0,
    bookingDays: 0,
    advance: 0
  }

  rooms!: Room[]

  constructor(private customerService: CustomerService, private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(r => this.rooms = r)
  }

  addCustomer() {
    this.customerService.addCustomer(this.customer).subscribe(c => {
      if (c) {
        this.router.navigate(['/customer'])
      }
    })
  }

}
