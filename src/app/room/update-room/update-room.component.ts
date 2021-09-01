import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomTypeService } from 'src/app/core/services/room-type.service';
import { RoomService } from 'src/app/core/services/room.service';
import { Room } from 'src/app/shared/models/room';
import { RoomType } from 'src/app/shared/models/roomType';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  room: Room = {
    id: 0,
    roomTypeId: 0,
    status: true
  }

  roomTypes!: RoomType[]

  constructor(private roomService: RoomService, private roomTypeService: RoomTypeService, private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.roomTypeService.getAllRoomTypes().subscribe(rt => this.roomTypes = rt)
  }

  updateRoom() {
    let id
    this.currentRoute.url.subscribe(u => id = u[2].path)
    id = Number(id)
    this.room.id = id
    this.roomService.updateRoom(this.room).subscribe(r => {
      if (r) {
        this.router.navigate(['/room/' + this.room.id])
      }
    })
  }

}
