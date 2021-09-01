import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoomType } from 'src/app/shared/models/roomType';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  constructor(private http: HttpClient) { }

  getAllRoomTypes(): Observable<RoomType[]> {
    return this.http.get(environment.apiUrl + "roomtype")
      .pipe(
        map(resp => resp as RoomType[])
      )
  }

  getRoomTypeById(id: number): Observable<RoomType> {
    return this.http.get(environment.apiUrl + "roomtype/" + id)
      .pipe(
        map(resp => resp as RoomType)
      )
  }

  deleteRoomType(id: number): Observable<RoomType> {
    return this.http.delete(environment.apiUrl + "roomtype/" + id)
      .pipe(
        map(resp => resp as RoomType)
      )
  }

  addRoomType(roomType: RoomType): Observable<RoomType> {
    return this.http.post(environment.apiUrl + "roomtype", roomType)
      .pipe(
        map(resp => resp as RoomType)
      )
  }

  updateRoomType(roomType: RoomType): Observable<RoomType> {
    return this.http.put(environment.apiUrl + "roomtype", roomType)
      .pipe(
        map(resp => resp as RoomType)
      )
  }

}
