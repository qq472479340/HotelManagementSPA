import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomTypeService } from 'src/app/core/services/room-type.service';
import { RoomType } from 'src/app/shared/models/roomType';

@Component({
  selector: 'app-room-type-details',
  templateUrl: './room-type-details.component.html',
  styleUrls: ['./room-type-details.component.css']
})
export class RoomTypeDetailsComponent implements OnInit {

  roomType!: RoomType

  constructor(private roomTypeService: RoomTypeService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id
    this.currentRoute.url.subscribe(u => id = u[1].path)
    id = Number(id)
    this.roomTypeService.getRoomTypeById(id).subscribe(mt => this.roomType = mt)
  }

  deleteRoomType() {
    let id
    this.currentRoute.url.subscribe(u => id = u[1].path)
    id = Number(id)
    this.roomTypeService.deleteRoomType(id).subscribe(resp => {
      if (resp) {
        this.router.navigate(['/roomtype'])
      }
    })
  }

}
