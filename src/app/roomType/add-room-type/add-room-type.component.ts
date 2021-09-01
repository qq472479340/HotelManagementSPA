import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomTypeService } from 'src/app/core/services/room-type.service';
import { RoomType } from 'src/app/shared/models/roomType';

@Component({
  selector: 'app-add-room-type',
  templateUrl: './add-room-type.component.html',
  styleUrls: ['./add-room-type.component.css']
})
export class AddRoomTypeComponent implements OnInit {

  roomType: RoomType = {
    id: 0,
    rtdesc: '',
    rent: 0
  }

  constructor(private roomTypeService: RoomTypeService, private router: Router) { }

  ngOnInit(): void {
  }

  addRoomType() {
    this.roomTypeService.addRoomType(this.roomType).subscribe(rt => {
      if (rt) {
        this.router.navigate(['/roomtype'])
      }
    })
  }

}
