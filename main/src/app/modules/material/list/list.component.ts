import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatDividerModule,
    ]
})
export class ListComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  typesOfFlowers: string[] = ['Tulip', 'Rose', 'Lily', 'Jasmine', 'Lotus'];
  messages = [
    {
      from: 'Pooja Sharma',
      subject: 'Brunch?',
      message: 'Did you want to go on Sunday? I was thinking that might work.',
      image: 'avatar-1.jpg',
    },
    {
      from: 'John Deo',
      subject: 'Summer BBQ',
      message: 'Wish I could come, but I have some prior obligations.',
      image: 'avatar-2.jpg',
    },
    {
      from: 'Sarah Smith',
      subject: 'Oui oui',
      message: 'Do you have Paris reservations for the 15th? I just booked!',
      image: 'avatar-3.jpg',
    },
  ];

  links = [
    { name: 'Inbox' },
    { name: 'Outbox' },
    { name: 'Spam' },
    { name: 'Trash' },
  ];

  folders = [
    { name: 'Imported', updated: 'Miles' },
    { name: 'Important', updated: 'Tina' },
    { name: 'Unread', updated: 'Jeremy' },
  ];

  notes = [
    { name: 'Update screenshots', updated: 'Kara' },
    { name: 'Install new application', updated: 'Andrew' },
  ];
}
