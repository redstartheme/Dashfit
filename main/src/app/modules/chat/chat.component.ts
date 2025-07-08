import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { NgScrollbar } from 'ngx-scrollbar';
import { CommonModule } from '@angular/common';

interface User {
  name: string;
  status: string;
  avatar: string;
  chatHistory: Message[];
}

interface Message {
  name: string;
  text: string;
  time: string;
  type: 'incoming' | 'outgoing';
}

@Component({
    selector: 'app-chat',
    imports: [
        PageHeaderComponent,
        MatFormFieldModule,
        CommonModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        NgScrollbar,
        MatIconModule,
    ],
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  hideRequiredControl = new UntypedFormControl(false);
  users: User[] = [];
  selectedUser: User | undefined;
  filteredMessages: Message[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/data/chat-data.json').subscribe((data) => {
      this.users = data.users;
      // Set the default selected user if needed
      this.selectedUser = this.users[0];
      this.updateMessagesForSelectedUser();
    });
  }

  onUserClick(user: User): void {
    this.selectedUser = user;
    this.updateMessagesForSelectedUser();
  }

  private updateMessagesForSelectedUser(): void {
    if (this.selectedUser) {
      this.filteredMessages = this.selectedUser.chatHistory;
    } else {
      this.filteredMessages = [];
    }
  }
}
