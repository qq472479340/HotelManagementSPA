import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/core/services/service.service';
import { Service } from 'src/app/shared/models/service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  service!: Service

  constructor(private serviceService: ServiceService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id
    this.currentRoute.url.subscribe(u => id = u[1].path)
    id = Number(id)
    this.serviceService.getServiceById(id).subscribe(s => this.service = s)
  }

  deleteService() {
    let id
    this.currentRoute.url.subscribe(u => id = u[1].path)
    id = Number(id)
    this.serviceService.deleteService(id).subscribe(resp => {
      if (resp) {
        this.router.navigate(['/service'])
      }
    })
  }

}
