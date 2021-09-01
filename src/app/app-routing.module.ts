import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { HomeComponent } from './home/home.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { RoomDetailsComponent } from './room/room-details/room-details.component';
import { ShowRoomComponent } from './room/show-room/show-room.component';
import { UpdateRoomComponent } from './room/update-room/update-room.component';
import { AddRoomTypeComponent } from './roomType/add-room-type/add-room-type.component';
import { RoomTypeDetailsComponent } from './roomType/room-type-details/room-type-details.component';
import { ShowRoomTypeComponent } from './roomType/show-room-type/show-room-type.component';
import { UpdateRoomTypeComponent } from './roomType/update-room-type/update-room-type.component';
import { AddServiceComponent } from './service/add-service/add-service.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { ShowServiceComponent } from './service/show-service/show-service.component';
import { UpdateServiceComponent } from './service/update-service/update-service.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "roomtype", component: ShowRoomTypeComponent },
  { path: "roomtype/:id", component: RoomTypeDetailsComponent },
  { path: "roomtype/add/new", component: AddRoomTypeComponent },
  { path: "roomtype/update/:id", component: UpdateRoomTypeComponent },
  { path: "room", component: ShowRoomComponent },
  { path: "room/:id", component: RoomDetailsComponent },
  { path: "room/add/new", component: AddRoomComponent },
  { path: "room/update/:id", component: UpdateRoomComponent },
  { path: "service", component: ShowServiceComponent },
  { path: "service/:id", component: ServiceDetailsComponent },
  { path: "service/add/new", component: AddServiceComponent },
  { path: "service/update/:id", component: UpdateServiceComponent },
  { path: "customer", component: ShowCustomerComponent },
  { path: "customer/:id", component: CustomerDetailsComponent },
  { path: "customer/add/new", component: AddCustomerComponent },
  { path: "customer/update/:id", component: UpdateCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
