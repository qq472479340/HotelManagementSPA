import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomTypeService } from 'src/app/core/services/room-type.service';
import { RoomType } from 'src/app/shared/models/roomType';

@Component({
  selector: 'app-update-room-type',
  templateUrl: './update-room-type.component.html',
  styleUrls: ['./update-room-type.component.css']
})
export class UpdateRoomTypeComponent implements OnInit {

  roomType: RoomType = {
    id: 0,
    rtdesc: '',
    rent: 0
  }

  constructor(private roomTypeService: RoomTypeService, private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  updateRoomType() {
    let id
    this.currentRoute.url.subscribe(u => id = u[2].path)
    id = Number(id)
    this.roomType.id = id
    this.roomTypeService.updateRoomType(this.roomType).subscribe(rt => {
      if (rt) {
        this.router.navigate(['/roomtype/' + this.roomType.id])
      }
    })
  }

}
