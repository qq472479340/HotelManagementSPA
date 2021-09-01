import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/core/services/room.service';
import { ServiceService } from 'src/app/core/services/service.service';
import { Room } from 'src/app/shared/models/room';
import { Service } from 'src/app/shared/models/service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {

  service: Service = {
    id: 0,
    roomId: 0,
    sdesc: '',
    amount: 0,
    serviceDate: new Date(Date())
  }

  rooms!: Room[]

  constructor(private serviceService: ServiceService, private roomService: RoomService, private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(r => this.rooms = r)
  }

  updateService() {
    let id
    this.currentRoute.url.subscribe(u => id = u[2].path)
    id = Number(id)
    this.service.id = id
    this.serviceService.updateService(this.service).subscribe(s => {
      if (s) {
        this.router.navigate(['/service/' + this.service.id])
      }
    })
  }

}
