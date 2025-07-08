import { Component, Input } from '@angular/core';

interface GuestList {
  name: string;
  roomNo: string;
  date: string;
  time: string;
  imageUrl: string;
}

@Component({
  selector: 'app-guest-list-card',
  imports: [],
  templateUrl: './guest-list-card.component.html',
  styleUrl: './guest-list-card.component.scss',
})
export class GuestListCardComponent {
  @Input() guestLists: GuestList[] = [];
}
