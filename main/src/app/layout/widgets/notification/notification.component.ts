import { Component, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgScrollbar } from 'ngx-scrollbar';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FeatherModule } from 'angular-feather';

interface Notifications {
  header: string;
  details: string;
  datetime: string;
  icontype: string;
  icon: string;
  image: string;
  color: string;
  status: string;
}

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatBadgeModule,
        MatListModule,
        NgScrollbar,
        NgClass,
        FeatherModule,
    ]
})
export class NotificationComponent {
  notifications: Notifications[] = [
    {
      header: 'Congratulation John!!',
      details: 'Please check your mail',
      datetime: 'Just now',
      icontype: 'image',
      icon: '',
      image: 'avatar-1.jpg',
      color: 'bg-green',
      status: 'msg-unread',
    },
    {
      header: 'You have receive a new message.',
      details: 'Hi, Hohn, how are you?',
      datetime: '25 Dec',
      icontype: 'icon',
      icon: 'mail',
      image: '',
      color: 'bg-purple',
      status: 'read',
    },
    {
      header: 'Sarah Smith commented in your post',
      details: 'Wow, it is very beautiful.',
      datetime: '11 Aug',
      icontype: 'image',
      icon: '',
      image: 'avatar-2.jpg',
      color: 'bg-green',
      status: 'read',
    },
    {
      header: 'Your request has been approved.',
      details: 'You request for leave application is approved by manager',
      datetime: 'Today',
      icontype: 'icon',
      icon: 'task_alt',
      image: '',
      color: 'bg-green',
      status: 'read',
    },
    {
      header: 'Pooja Sharma message you',
      details:
        'Good Morning, Plese find attached your insurence policy details.',
      datetime: 'Just now',
      icontype: 'image',
      icon: '',
      image: 'avatar-3.jpg',
      color: 'bg-green',
      status: 'read',
    },
    {
      header: 'Application Error',
      details: 'Error in your code.',
      datetime: 'Today',
      icontype: 'icon',
      icon: 'error_outline',
      image: '',
      color: 'bg-red',
      status: 'read',
    },

    {
      header: 'Salary Credited.',
      details: 'Your account is credited.',
      datetime: '25 Dec',
      icontype: 'icon',
      icon: 'monetization_on',
      image: '',
      color: 'bg-green',
      status: 'read',
    },
  ];
}
