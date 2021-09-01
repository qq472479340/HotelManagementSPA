import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Service } from 'src/app/shared/models/service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<Service[]> {
    return this.http.get(environment.apiUrl + "service")
      .pipe(
        map(resp => resp as Service[])
      )
  }

  getServiceById(id: number): Observable<Service> {
    return this.http.get(environment.apiUrl + "service/" + id)
      .pipe(
        map(resp => resp as Service)
      )
  }

  deleteService(id: number): Observable<Service> {
    return this.http.delete(environment.apiUrl + "service/" + id)
      .pipe(
        map(resp => resp as Service)
      )
  }

  addService(service: Service): Observable<Service> {
    return this.http.post(environment.apiUrl + "service", service)
      .pipe(
        map(resp => resp as Service)
      )
  }

  updateService(service: Service): Observable<Service> {
    return this.http.put(environment.apiUrl + "service", service)
      .pipe(
        map(resp => resp as Service)
      )
  }

}
