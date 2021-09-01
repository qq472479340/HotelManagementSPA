import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';
import { map } from 'rxjs/operators';
import { Room } from 'src/app/shared/models/room';
import { RoomDetails } from 'src/app/shared/models/room-details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    return this.http.get(environment.apiUrl + "room")
      .pipe(
        map(resp => resp as Room[])
      )
  }

  getRoomById(id: number): Observable<RoomDetails> {
    return this.http.get(environment.apiUrl + "room/" + id)
      .pipe(
        map(resp => resp as RoomDetails)
      )
  }

  deleteRoom(id: number): Observable<Room> {
    return this.http.delete(environment.apiUrl + "room/" + id)
      .pipe(
        map(resp => resp as Room)
      )
  }

  addRoom(room: Room): Observable<Room> {
    return this.http.post(environment.apiUrl + "room", room)
      .pipe(
        map(resp => resp as Room)
      )
  }

  updateRoom(room: Room): Observable<Room> {
    return this.http.put(environment.apiUrl + "room", room)
      .pipe(
        map(resp => resp as Room)
      )
  }

}
