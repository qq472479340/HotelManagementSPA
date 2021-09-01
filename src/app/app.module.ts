import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { ShowRoomTypeComponent } from './roomType/show-room-type/show-room-type.component';
import { RoomTypeDetailsComponent } from './roomType/room-type-details/room-type-details.component';
import { AddRoomTypeComponent } from './roomType/add-room-type/add-room-type.component';
import { UpdateRoomTypeComponent } from './roomType/update-room-type/update-room-type.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { RoomDetailsComponent } from './room/room-details/room-details.component';
import { ShowRoomComponent } from './room/show-room/show-room.component';
import { UpdateRoomComponent } from './room/update-room/update-room.component';
import { AddServiceComponent } from './service/add-service/add-service.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { ShowServiceComponent } from './service/show-service/show-service.component';
import { UpdateServiceComponent } from './service/update-service/update-service.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { ShowCustomerComponent } from './customer/show-customer/show-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ShowRoomTypeComponent,
    RoomTypeDetailsComponent,
    AddRoomTypeComponent,
    UpdateRoomTypeComponent,
    AddRoomComponent,
    RoomDetailsComponent,
    ShowRoomComponent,
    UpdateRoomComponent,
    AddServiceComponent,
    ServiceDetailsComponent,
    ShowServiceComponent,
    UpdateServiceComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    ShowCustomerComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
