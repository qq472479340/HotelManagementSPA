import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/core/services/customer.service';
import { RoomService } from 'src/app/core/services/room.service';
import { Customer } from 'src/app/shared/models/customer';
import { Room } from 'src/app/shared/models/room';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

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

  constructor(private customerService: CustomerService, private roomService: RoomService, private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(r => this.rooms = r)
  }

  updateCustomer() {
    let id
    this.currentRoute.url.subscribe(u => id = u[2].path)
    id = Number(id)
    this.customer.id = id
    this.customerService.updateCustomer(this.customer).subscribe(c => {
      if (c) {
        this.router.navigate(['/customer/' + this.customer.id])
      }
    })
  }

}
