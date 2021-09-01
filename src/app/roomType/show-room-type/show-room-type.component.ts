import { Component, OnInit } from '@angular/core';
import { RoomTypeService } from 'src/app/core/services/room-type.service';
import { RoomType } from 'src/app/shared/models/roomType';

@Component({
  selector: 'app-show-room-type',
  templateUrl: './show-room-type.component.html',
  styleUrls: ['./show-room-type.component.css']
})
export class ShowRoomTypeComponent implements OnInit {

  roomTypes!: RoomType[]

  constructor(private roomTypeService: RoomTypeService) { }

  ngOnInit(): void {
    this.roomTypeService.getAllRoomTypes().subscribe(
      rt => this.roomTypes = rt
    )
  }

}
