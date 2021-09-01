import { Service } from "./service";

export interface CustomerDetails {
    id: number;
    roomId: number;
    cName: string;
    address: string;
    phone: string;
    email: string;
    checkIn: Date;
    totalPersons: number;
    bookingDays: number;
    advance: number;
    room: RoomService;
}

export interface RoomService {
    id: number;
    roomTypeId: number;
    status: boolean;
    services: Service[];
}