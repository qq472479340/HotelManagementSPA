import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/core/services/room.service';
import { ServiceService } from 'src/app/core/services/service.service';
import { Room } from 'src/app/shared/models/room';
import { Service } from 'src/app/shared/models/service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  service: Service = {
    id: 0,
    roomId: 0,
    sdesc: '',
    amount: 0,
    serviceDate: new Date(Date())
  }

  rooms!: Room[]

  constructor(private serviceService: ServiceService, private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(r => this.rooms = r)
  }

  addService() {
    this.serviceService.addService(this.service).subscribe(s => {
      if (s) {
        this.router.navigate(['/service'])
      }
    })
  }

}
