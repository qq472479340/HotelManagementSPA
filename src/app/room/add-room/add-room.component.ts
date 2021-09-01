import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomTypeService } from 'src/app/core/services/room-type.service';
import { RoomService } from 'src/app/core/services/room.service';
import { Room } from 'src/app/shared/models/room';
import { RoomType } from 'src/app/shared/models/roomType';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  room: Room = {
    id: 0,
    roomTypeId: 0,
    status: true
  }

  roomTypes!: RoomType[]

  constructor(private roomService: RoomService, private roomTypeService: RoomTypeService, private router: Router) { }

  ngOnInit(): void {
    this.roomTypeService.getAllRoomTypes().subscribe(rt => this.roomTypes = rt)
  }

  addRoom() {
    this.roomService.addRoom(this.room).subscribe(r => {
      if (r) {
        this.router.navigate(['/room'])
      }
    })
  }

}
