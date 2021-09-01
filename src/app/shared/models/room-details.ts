import { RoomType } from "./roomType";

export interface RoomDetails {
    id: number;
    roomTypeId: number;
    status: boolean;
    roomType: RoomType;
}