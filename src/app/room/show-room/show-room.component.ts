import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/core/services/room.service';
import { Room } from 'src/app/shared/models/room';

@Component({
  selector: 'app-show-room',
  templateUrl: './show-room.component.html',
  styleUrls: ['./show-room.component.css']
})
export class ShowRoomComponent implements OnInit {

  rooms!: Room[]

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(r => this.rooms = r)
  }

}
