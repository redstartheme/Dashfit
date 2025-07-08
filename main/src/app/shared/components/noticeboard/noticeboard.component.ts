import { Component, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-noticeboard',
  imports: [MatCardModule],
  templateUrl: './noticeboard.component.html',
  styleUrl: './noticeboard.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NoticeboardComponent {
  notices = [
    {
      title: 'Annual Sports Day Announcement',
      author: 'Emily Johnson',
      image: 'assets/images/avatars/avatar-1.jpg',
    },
    {
      title: 'Midterm Exam Schedule Released',
      author: 'Michael Smith',
      image: 'assets/images/avatars/avatar-5.jpg',
    },
    {
      title: 'Parent-Teacher Meeting Reminder',
      author: 'Sarah Brown',
      image: 'assets/images/avatars/avatar-7.jpg',
    },
    {
      title: 'Library Renovation Notice',
      author: 'David Wilson',
      image: 'assets/images/avatars/avatar-8.jpg',
    },
    {
      title: 'Field Trip to Science Museum',
      author: 'Laura Martinez',
      image: 'assets/images/avatars/avatar-9.jpg',
    },
    {
      title: 'New Extracurricular Activities Available',
      author: 'Chris Taylor',
      image: 'assets/images/avatars/avatar-10.jpg',
    },
    {
      title: 'End of Year Award Ceremony Details',
      author: 'Sophia Garcia',
      image: 'assets/images/avatars/avatar-11.jpg',
    },
  ];
}
