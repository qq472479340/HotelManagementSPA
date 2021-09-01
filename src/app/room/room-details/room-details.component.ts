import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/core/services/room.service';
import { Room } from 'src/app/shared/models/room';
import { RoomDetails } from 'src/app/shared/models/room-details';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  roomDetails!: RoomDetails

  constructor(private roomService: RoomService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id
    this.currentRoute.url.subscribe(u => id = u[1].path)
    id = Number(id)
    this.roomService.getRoomById(id).subscribe(r => this.roomDetails = r)
  }

  deleteRoom() {
    let id
    this.currentRoute.url.subscribe(u => id = u[1].path)
    id = Number(id)
    this.roomService.deleteRoom(id).subscribe(resp => {
      if (resp) {
        this.router.navigate(['/room'])
      }
    })
  }

}
