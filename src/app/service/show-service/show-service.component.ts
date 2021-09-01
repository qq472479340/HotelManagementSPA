import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core/services/service.service';
import { Service } from 'src/app/shared/models/service';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.css']
})
export class ShowServiceComponent implements OnInit {

  services!: Service[]

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe(s => this.services = s)
  }

}
