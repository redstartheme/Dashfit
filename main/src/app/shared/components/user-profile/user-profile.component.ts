
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

export interface UserProfile {
  name: string;
  avatar: string;
  postCount: number;
  isFollowed?: boolean;
}

@Component({
  selector: 'app-user-profile',
  imports: [MatButtonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  @Input() users: UserProfile[] = [
    {
      name: 'Jacob Ryan',
      avatar: 'assets/images/avatars/avatar-6.jpg',
      postCount: 478,
    },
    {
      name: 'Jens Brincker',
      avatar: 'assets/images/avatars/avatar-2.jpg',
      postCount: 1258,
    },
    {
      name: 'Angelica Ramos',
      avatar: 'assets/images/avatars/avatar-1.jpg',
      postCount: 879,
    },
    {
      name: 'Jens Brincker',
      avatar: 'assets/images/avatars/avatar-7.jpg',
      postCount: 258,
    },
    {
      name: 'Airi Satou',
      avatar: 'assets/images/avatars/avatar-5.jpg',
      postCount: 145,
    },
    {
      name: 'Priya Jain',
      avatar: 'assets/images/avatars/avatar-8.jpg',
      postCount: 478,
    },
    {
      name: 'Sagar Patel',
      avatar: 'assets/images/avatars/avatar-9.jpg',
      postCount: 1258,
    },
  ];

  toggleFollow(user: UserProfile) {
    user.isFollowed = !user.isFollowed;
  }
}
