import { RoomRatesComponent } from './room-rates/room-rates.component';
import { Route } from '@angular/router';
import { Page404Component } from 'app/modules/sessions/page404/page404.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { RoomTypesComponent } from './room-types/room-types.component';

export const ROOMS_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'all-rooms',
    pathMatch: 'full',
  },
  {
    path: 'all-rooms',
    component: AllRoomsComponent,
  },
  {
    path: 'add-room',
    component: AddRoomComponent,
  },
  {
    path: 'edit-room',
    component: EditRoomComponent,
  },
  {
    path: 'room-types',
    component: RoomTypesComponent,
  },
  {
    path: 'room-rates',
    component: RoomRatesComponent,
  },
  { path: '**', component: Page404Component },
];
