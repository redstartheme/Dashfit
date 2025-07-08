import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppointmentCardComponent } from '@shared/components/appointment-card/appointment-card.component';
import { AssignTaskComponent } from '@shared/components/assign-task/assign-task.component';
import { AvailabilityCardComponent } from '@shared/components/availability-card/availability-card.component';
import { BookingAverageComponent } from '@shared/components/booking-average/booking-average.component';
import { BookingStatusComponent } from '@shared/components/booking-status/booking-status.component';
import {
  ChatWidgetComponent,
  Message,
} from '@shared/components/chat-widget/chat-widget.component';
import {
  CompanyStreangthComponent,
  CompanyStrengthItem,
} from '@shared/components/company-streangth/company-streangth.component';
import { DocumentListComponent } from '@shared/components/document-list/document-list.component';
import { EmpStatusComponent } from '@shared/components/emp-status/emp-status.component';
import { EmpTaskTabComponent } from '@shared/components/emp-task-tab/emp-task-tab.component';
import { EventCardComponent } from '@shared/components/event-card/event-card.component';
import { GuestListCardComponent } from '@shared/components/guest-list-card/guest-list-card.component';
import {
  LatestPostComponent,
  Post,
} from '@shared/components/latest-post/latest-post.component';
import {
  Medicine,
  MedicineListComponent,
} from '@shared/components/medicine-list/medicine-list.component';
import { NewOrderListComponent } from '@shared/components/new-order-list/new-order-list.component';
import { NoticeboardComponent } from '@shared/components/noticeboard/noticeboard.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { PatientGroupListComponent } from '@shared/components/patient-group-list/patient-group-list.component';
import {
  ProgressTableComponent,
  SubjectProgress,
} from '@shared/components/progress-table/progress-table.component';
import {
  Project,
  ProjectStatusComponent,
} from '@shared/components/project-status/project-status.component';
import { RatingCardComponent } from '@shared/components/rating-card/rating-card.component';
import { RatingWidgetComponent } from '@shared/components/rating-widget/rating-widget.component';
import { RecentActivityComponent } from '@shared/components/recent-activity/recent-activity.component';
import { RecentCommentsComponent } from '@shared/components/recent-comments/recent-comments.component';
import { ReportCardWidgetComponent } from '@shared/components/report-card-widget/report-card-widget.component';
import { ReviewWidgetComponent } from '@shared/components/review-widget/review-widget.component';
import { ScheduleCardComponent } from '@shared/components/schedule-card/schedule-card.component';
import { TestimonialComponent } from '@shared/components/testimonial/testimonial.component';
import {
  TimelineItem,
  TimelineListComponent,
} from '@shared/components/timeline-list/timeline-list.component';
import { TodoWidgetComponent } from '@shared/components/todo-widget/todo-widget.component';
import { TopPerformerComponent } from '@shared/components/top-performer/top-performer.component';
import {
  Transaction,
  TransactionsWidgetComponent,
} from '@shared/components/transactions-widget/transactions-widget.component';
import { UserProfileComponent } from '@shared/components/user-profile/user-profile.component';
import { NgScrollbar } from 'ngx-scrollbar';

interface Task {
  userImage: string;
  userName: string;
  taskDetails: string;
  status: string;
  statusClass: string;
  manager: string;
  progress: number;
  progressClass: string;
}

interface Todo {
  title: string;
  done: boolean;
  priority: 'Low' | 'Normal' | 'High';
}

@Component({
  selector: 'app-card-widget',
  imports: [
    PageHeaderComponent,
    MatProgressBarModule,
    NgScrollbar,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    ProgressTableComponent,
    DocumentListComponent,
    ReviewWidgetComponent,
    AssignTaskComponent,
    NewOrderListComponent,
    EmpTaskTabComponent,
    RecentActivityComponent,
    ChatWidgetComponent,
    LatestPostComponent,
    RecentCommentsComponent,
    TimelineListComponent,
    TodoWidgetComponent,
    MedicineListComponent,
    ReportCardWidgetComponent,
    EventCardComponent,
    ScheduleCardComponent,
    EmpStatusComponent,
    NoticeboardComponent,
    TransactionsWidgetComponent,
    ProjectStatusComponent,
    TestimonialComponent,
    RatingWidgetComponent,
    UserProfileComponent,
    CompanyStreangthComponent,
    AppointmentCardComponent,
    PatientGroupListComponent,
    TopPerformerComponent,
    AvailabilityCardComponent,
    GuestListCardComponent,
    BookingStatusComponent,
    BookingAverageComponent,
    RatingCardComponent,
  ],
  templateUrl: './card-widget.component.html',
  styleUrl: './card-widget.component.scss',
})
export class CardWidgetComponent {
  totalBookings: number = 35;
  checkedIn: number = 26;
  checkedOut: number = 9;
  constructor() {}

  // Progress table data

  roomStatus: SubjectProgress[] = [
    { subject: 'Room 502', progress: 30, duration: '2 Months' },
    { subject: 'Room 704', progress: 55, duration: '3 Months' },
    { subject: 'Room 102', progress: 67, duration: '1 Month' },
    { subject: 'Room 604', progress: 70, duration: '2 Months' },
    { subject: 'Room 301', progress: 24, duration: '3 Months' },
    { subject: 'Room 206', progress: 77, duration: '4 Months' },
    { subject: 'Room 406', progress: 41, duration: '2 Months' },
  ];

  // document list

  documentList = [
    {
      title: 'Java Programming',
      type: '.doc',
      size: 4.3,
      icon: 'article',
      iconClass: 'primary-rgba text-blue',
      textClass: '',
    },
    {
      title: 'Angular Theory',
      type: '.xls',
      size: 2.5,
      icon: 'description',
      iconClass: 'success-rgba text-green',
      textClass: '',
    },
    {
      title: 'Maths Sums Solution',
      type: '.pdf',
      size: 10.5,
      icon: 'picture_as_pdf',
      iconClass: 'danger-rgba text-red',
      textClass: '',
    },
    {
      title: 'Submit Science Journal',
      type: '.zip',
      size: 53.2,
      icon: 'folder_zip',
      iconClass: 'info-rgba text-cyan',
      textClass: '',
    },
    {
      title: 'Marketing Instructions',
      type: '.doc',
      size: 5.3,
      icon: 'article',
      iconClass: 'primary-rgba text-blue',
      textClass: '',
    },
    {
      title: 'Java Complete Reference',
      type: '.pdf',
      size: 10.5,
      icon: 'picture_as_pdf',
      iconClass: 'danger-rgba text-red',
      textClass: '',
    },
  ];

  // Guest List

  guestLists = [
    {
      name: 'Cara Stevens',
      roomNo: 'Room:102',
      date: "12 June '20",
      time: '09:00-10:00',
      imageUrl: 'assets/images/avatars/avatar-1.jpg',
    },
    {
      name: 'Airi Satou',
      roomNo: 'Room:105',
      date: "13 June '20",
      time: '11:00-12:00',
      imageUrl: 'assets/images/avatars/avatar-2.jpg',
    },
    {
      name: 'Jens Brincker',
      roomNo: 'Room:302',
      date: "15 June '20",
      time: '09:30-10:30',
      imageUrl: 'assets/images/avatars/avatar-3.jpg',
    },
    {
      name: 'Angelica Ramos',
      roomNo: 'Room:507',
      date: "16 June '20",
      time: '14:00-15:00',
      imageUrl: 'assets/images/avatars/avatar-4.jpg',
    },
    {
      name: 'Cara Stevens',
      roomNo: 'Room:804',
      date: "18 June '20",
      time: '11:00-12:30',
      imageUrl: 'assets/images/avatars/avatar-5.jpg',
    },
    {
      name: 'Jacob Ryan',
      roomNo: 'Room:705',
      date: "22 June '20",
      time: '13:00-14:15',
      imageUrl: 'assets/images/avatars/avatar-6.jpg',
    },
  ];

  // review list

  reviewList = [
    {
      name: 'Alis Smith',
      timeAgo: 'a week ago',
      rating: 3.5,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel rutrum ex, at ornare mi. In quis scelerisque dui, eget rhoncus orci. Fusce et sodales ipsum. Nam id nunc euismod, aliquet arcu quis, mattis nisi.',
      imageUrl: 'assets/images/avatars/avatar-1.jpg',
    },
    {
      name: 'John Dio',
      timeAgo: 'a week ago',
      rating: 2.5,
      comment:
        'Nam quis ligula est. Nunc sed risus non turpis tristique tempor. Ut sollicitudin faucibus magna nec gravida. Suspendisse ullamcorper justo vel porta imperdiet. Nunc nec ipsum vel augue placerat faucibus.',
      imageUrl: 'assets/images/avatars/avatar-2.jpg',
    },
  ];
  // task

  assignTasks: Task[] = [
    {
      userImage: 'assets/images/avatars/avatar-1.jpg',
      userName: 'John Deo',
      taskDetails: 'Task A',
      status: 'Doing',
      statusClass: 'bg-green',
      manager: 'John Doe',
      progress: 62,
      progressClass: 'bg-green',
    },
    {
      userImage: 'assets/images/avatars/avatar-2.jpg',
      userName: 'John Deo',
      taskDetails: 'Task B',
      status: 'To Do',
      statusClass: 'bg-purple',
      manager: 'John Doe',
      progress: 40,
      progressClass: 'bg-purple',
    },
    {
      userImage: 'assets/images/avatars/avatar-3.jpg',
      userName: 'John Deo',
      taskDetails: 'Task C',
      status: 'On Hold',
      statusClass: 'bg-orange',
      manager: 'John Doe',
      progress: 72,
      progressClass: 'bg-orange',
    },
    {
      userImage: 'assets/images/avatars/avatar-4.jpg',
      userName: 'John Deo',
      taskDetails: 'Task D',
      status: 'Waiting',
      statusClass: 'bg-cyan',
      manager: 'John Doe',
      progress: 95,
      progressClass: 'bg-cyan',
    },
    {
      userImage: 'assets/images/avatars/avatar-5.jpg',
      userName: 'John Deo',
      taskDetails: 'Task E',
      status: 'Suspended',
      statusClass: 'bg-green',
      manager: 'John Doe',
      progress: 87,
      progressClass: 'bg-green',
    },
    {
      userImage: 'assets/images/avatars/avatar-6.jpg',
      userName: 'Jane Smith',
      taskDetails: 'Task F',
      status: 'Doing',
      statusClass: 'bg-green',
      manager: 'John Doe',
      progress: 55,
      progressClass: 'bg-green',
    },
    {
      userImage: 'assets/images/avatars/avatar-7.jpg',
      userName: 'Emily Johnson',
      taskDetails: 'Task G',
      status: 'To Do',
      statusClass: 'bg-purple',
      manager: 'John Doe',
      progress: 20,
      progressClass: 'bg-purple',
    },
    {
      userImage: 'assets/images/avatars/avatar-8.jpg',
      userName: 'Michael Brown',
      taskDetails: 'Task H',
      status: 'On Hold',
      statusClass: 'bg-orange',
      manager: 'John Doe',
      progress: 10,
      progressClass: 'bg-orange',
    },
    {
      userImage: 'assets/images/avatars/avatar-9.jpg',
      userName: 'Sarah Davis',
      taskDetails: 'Task I',
      status: 'Waiting',
      statusClass: 'bg-blue',
      manager: 'John Doe',
      progress: 100,
      progressClass: 'bg-blue',
    },
  ];

  // Employee task data

  employeeData = [
    {
      name: 'Sarah Smith',
      imgUrl: 'assets/images/avatars/avatar-1.jpg',
      tasks: [
        {
          name: 'Task C',
          status: 'Completed',
          statusClass: 'col-green',
          manager: 'John Doe',
          progress: 72,
          progressBarClass: 'l-bg-green',
        },
        {
          name: 'Task A',
          status: 'On Process',
          statusClass: 'col-red',
          manager: 'John Doe',
          progress: 62,
          progressBarClass: 'l-bg-red',
        },
        {
          name: 'Task B',
          status: 'On Hold',
          statusClass: 'col-purple',
          manager: 'John Doe',
          progress: 40,
          progressBarClass: 'l-bg-purple',
        },
        {
          name: 'Task D',
          status: 'Completed',
          statusClass: 'col-green',
          manager: 'John Doe',
          progress: 72,
          progressBarClass: 'l-bg-green',
        },
        {
          name: 'Task E',
          status: 'On Hold',
          statusClass: 'col-purple',
          manager: 'John Doe',
          progress: 40,
          progressBarClass: 'l-bg-purple',
        },
        {
          name: 'Task P',
          status: 'On Hold',
          statusClass: 'col-purple',
          manager: 'John Doe',
          progress: 40,
          progressBarClass: 'l-bg-purple',
        },
        {
          name: 'Task O',
          status: 'On Process',
          statusClass: 'col-red',
          manager: 'John Doe',
          progress: 62,
          progressBarClass: 'l-bg-red',
        },
      ],
    },
    {
      name: 'Jalpa Joshi',
      imgUrl: 'assets/images/avatars/avatar-2.jpg',
      tasks: [
        {
          name: 'Task D',
          status: 'On Process',
          statusClass: 'col-red',
          manager: 'John Doe',
          progress: 62,
          progressBarClass: 'l-bg-red',
        },
        {
          name: 'Task E',
          status: 'On Hold',
          statusClass: 'col-purple',
          manager: 'John Doe',
          progress: 40,
          progressBarClass: 'l-bg-purple',
        },
        {
          name: 'Task F',
          status: 'Completed',
          statusClass: 'col-green',
          manager: 'John Doe',
          progress: 72,
          progressBarClass: 'l-bg-green',
        },
        {
          name: 'Task G',
          status: 'On Process',
          statusClass: 'col-red',
          manager: 'John Doe',
          progress: 62,
          progressBarClass: 'l-bg-red',
        },
      ],
    },
    {
      name: 'Mark Peter',
      imgUrl: 'assets/images/avatars/avatar-3.jpg',
      tasks: [
        {
          name: 'Task E',
          status: 'On Hold',
          statusClass: 'col-purple',
          manager: 'John Doe',
          progress: 40,
          progressBarClass: 'l-bg-purple',
        },
        {
          name: 'Task D',
          status: 'On Process',
          statusClass: 'col-red',
          manager: 'John Doe',
          progress: 62,
          progressBarClass: 'l-bg-red',
        },
        {
          name: 'Task F',
          status: 'Completed',
          statusClass: 'col-green',
          manager: 'John Doe',
          progress: 72,
          progressBarClass: 'l-bg-green',
        },
      ],
    },
  ];

  // recent activities

  recentActivities = [
    {
      timestamp: '5 mins ago',
      message:
        'Lorem ipsum dolor sit amet conse ctetur which ascing elit users.',
      statusClass: 'sl-primary',
    },
    {
      timestamp: '8 mins ago',
      message:
        'Lorem ipsum dolor sit ametcon the sectetur that ascing elit users.',
      statusClass: 'sl-danger',
    },
    {
      timestamp: '10 mins ago',
      message:
        'Lorem ipsum dolor sit amet cons the ecte tur and adip ascing elit users.',
      statusClass: 'sl-success',
    },
    {
      timestamp: '20 mins ago',
      message:
        'Lorem ipsum dolor sit amet cons the ecte tur and adip ascing elit users.',
      statusClass: 'sl-primary',
    },
    {
      timestamp: '5 mins ago',
      message:
        'Lorem ipsum dolor sit amet conse ctetur which ascing elit users.',
      statusClass: 'sl-success',
    },
  ];

  // chat widget

  messages: Message[] = [
    {
      sender: 'Michael',
      text: 'Hi Aiden, how are you? How is the project coming along?',
      time: '10:10 AM',
    },
    {
      sender: 'Aiden',
      text: 'Are we meeting today? Project has been already finished and I have results to show you.',
      time: '10:12 AM',
    },
  ];

  onMessageSent(messageText: string) {
    console.log('Message Sent:', messageText);
  }

  // latest post

  postList: Post[] = [
    {
      image: 'assets/images/posts/post1.jpg',
      title: 'About Something',
      timeAgo: '10 minutes ago',
      description: 'Lorem Ipsum is simply dummy text of the.',
    },
    {
      image: 'assets/images/posts/post2.jpg',
      title: 'Relationship',
      timeAgo: '24 minutes ago',
      description: 'Lorem Ipsum is simply dummy text of the.',
    },
    {
      image: 'assets/images/posts/post3.jpg',
      title: 'Human body',
      timeAgo: '53 minutes ago',
      description: 'Lorem Ipsum is simply dummy text of the.',
    },
  ];

  //recent comments

  comments = [
    {
      name: 'Dr. Airi Satou',
      message: 'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.',
      timestamp: '7 hours ago',
      imgSrc: 'assets/images/avatars/avatar-6.jpg',
      colorClass: 'text-green',
    },
    {
      name: 'Dr. Sarah Smith',
      message: 'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.',
      timestamp: '1 hour ago',
      imgSrc: 'assets/images/avatars/avatar-4.jpg',
      colorClass: 'text-indigo',
    },
    {
      name: 'Dr. Cara Stevens',
      message: 'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.',
      timestamp: 'Yesterday',
      imgSrc: 'assets/images/avatars/avatar-3.jpg',
      colorClass: 'text-cyan',
    },
    {
      name: 'Dr. Ashton Cox',
      message: 'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.',
      timestamp: 'Yesterday',
      imgSrc: 'assets/images/avatars/avatar-7.jpg',
      colorClass: 'text-orange',
      noBorder: true,
    },
    {
      name: 'Dr. Mark Hay',
      message: 'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.',
      timestamp: '1 hour ago',
      imgSrc: 'assets/images/avatars/avatar-9.jpg',
      colorClass: 'text-red',
    },
  ];

  // timeline list

  timelineData: TimelineItem[] = [
    {
      image: 'assets/images/avatars/avatar-1.jpg',
      title: 'Lorem ipsum dolor sit amet, id quo eruditi.',
      timeAgo: '5 minutes ago',
    },
    {
      image: 'assets/images/avatars/avatar-2.jpg',
      title: 'Lorem ipsum dolor sit amet, id quo eruditi.',
      timeAgo: '10 minutes ago',
    },
    {
      image: 'assets/images/avatars/avatar-8.jpg',
      title: 'Lorem ipsum dolor sit amet, id quo eruditi.',
      timeAgo: '20 minutes ago',
    },
    {
      image: 'assets/images/avatars/avatar-4.jpg',
      title: 'Lorem ipsum dolor sit amet, id quo eruditi.',
      timeAgo: '35 minutes ago',
    },
    {
      image: 'assets/images/avatars/avatar-5.jpg',
      title: 'Lorem ipsum dolor sit amet, id quo eruditi.',
      timeAgo: '45 minutes ago',
    },
    {
      image: 'assets/images/avatars/avatar-7.jpg',
      title: 'Lorem ipsum dolor sit amet, id quo eruditi.',
      timeAgo: '1 hour ago',
    },
    {
      image: 'assets/images/avatars/avatar-3.jpg',
      title: 'Lorem ipsum dolor sit amet, id quo eruditi.',
      timeAgo: '2 hours ago',
    },
    {
      image: 'assets/images/avatars/avatar-6.jpg',
      title: 'Lorem ipsum dolor sit amet, id quo eruditi.',
      timeAgo: '3 hours ago',
    },
  ];

  // medicine list

  medicineDataSource: Medicine[] = [
    {
      name: 'Econochlor (chloramphenicol-oral)',
      icon: 'vaccines',
      dosage: '1 - 0 - 1',
    },
    {
      name: 'Desmopressin tabs',
      icon: 'vaccines',
      dosage: '1 - 1 - 1',
    },
    {
      name: 'Abciximab-injection',
      icon: 'vaccines',
      dosage: '1 Daily',
    },
    {
      name: 'Kevzara sarilumab',
      icon: 'vaccines',
      dosage: '0 - 0 - 1',
    },
    {
      name: 'Gentamicin-topical',
      icon: 'vaccines',
      dosage: '1 - 0 - 1',
    },
    {
      name: 'Paliperidone palmitate',
      icon: 'vaccines',
      dosage: '1 - 1 - 1',
    },
    {
      name: 'Sermorelin-injectable',
      icon: 'vaccines',
      dosage: '1 Daily',
    },
  ];

  // TODO start
  tasks: Todo[] = [
    { title: 'Buy groceries', done: false, priority: 'Normal' },
    { title: 'Finish project report', done: false, priority: 'High' },
    { title: 'Clean the house', done: true, priority: 'Low' },
    { title: 'Call the bank', done: false, priority: 'Normal' },
    { title: 'Read a book', done: false, priority: 'Low' },
    { title: 'Schedule doctor appointment', done: false, priority: 'High' },
    { title: 'Prepare for presentation', done: false, priority: 'Normal' },
    { title: 'Exercise for 30 minutes', done: false, priority: 'Normal' },
    { title: 'Finish laundry', done: true, priority: 'Low' },
    { title: 'Write blog post', done: false, priority: 'High' },
    { title: 'Organize workspace', done: false, priority: 'Normal' },
    { title: 'Plan weekend trip', done: false, priority: 'High' },
    { title: 'Buy gifts for friends', done: false, priority: 'Low' },
  ];

  onTodoToggled(todo: any) {
    console.log('Todo toggled:', todo);
  }

  onTodosUpdated(updatedTodos: any[]) {
    console.log('Todos updated:', updatedTodos);
  }
  // TODO end

  // Events
  events = [
    {
      day: 'Tuesday',
      date: 4,
      month: 'Jan',
      title: 'Science Fair',
      timeStart: '11:00 AM',
      timeEnd: '12:30 PM',
      status: 'Today',
    },
    {
      day: 'Friday',
      date: 12,
      month: 'Jan',
      title: 'Guest Speaker',
      timeStart: '11:00 AM',
      timeEnd: '12:30 PM',
      status: 'In 8 days',
    },
    {
      day: 'Sunday',
      date: 18,
      month: 'Jan',
      title: 'Art Exhibition Opening',
      timeStart: '01:00 PM',
      timeEnd: '02:30 PM',
      status: 'In 11 days',
    },
  ];

  examList = [
    {
      title: 'Standard 1',
      dateRange: '23-03-2022 | 28-03-2022',
      statusClass: 'colorStyle1',
    },
    {
      title: 'Standard 2',
      dateRange: '10-03-2022 | 15-03-2022',
      statusClass: 'colorStyle2',
    },
    {
      title: 'Standard 3',
      dateRange: '03-04-2022 | 10-04-2022',
      statusClass: 'colorStyle3',
    },
    {
      title: 'Standard 4',
      dateRange: '11-05-2022 | 15-05-2022',
      statusClass: 'colorStyle4',
    },
    {
      title: 'Standard 5',
      dateRange: '17-05-2022 | 21-05-2022',
      statusClass: 'colorStyle1',
    },
    {
      title: 'Standard 6',
      dateRange: '23-05-2022 | 28-05-2022',
      statusClass: 'colorStyle2',
    },
    {
      title: 'Standard 7',
      dateRange: '11-06-2022 | 15-06-2022',
      statusClass: 'colorStyle3',
    },
  ];

  // transactions

  transactions: Transaction[] = [
    {
      type: 'Bank Transfer',
      category: 'Bank Transfer',
      description: 'Send money',
      amount: 100.65,
      icon: 'account_balance',
      iconColor: 'green',
      textColor: 'orange',
    },
    {
      type: 'Wallet',
      category: 'Wallet',
      description: 'Wallet recharge',
      amount: 2000,
      icon: 'account_balance_wallet',
      iconColor: 'orange',
      textColor: 'green',
    },
    {
      type: 'Credit Card',
      category: 'Credit Card',
      description: 'Ordered Food',
      amount: 25.69,
      icon: 'credit_card',
      iconColor: 'purple',
      textColor: 'orange',
    },
    {
      type: 'Cash Payment',
      category: 'Cash Payment',
      description: 'Sell Stationery',
      amount: 148.47,
      icon: 'attach_money',
      iconColor: 'blue',
      textColor: 'green',
    },
    {
      type: 'Debit Card',
      category: 'Debit Card',
      description: 'ATM Withdraw',
      amount: 100.65,
      icon: 'credit_card',
      iconColor: 'red',
      textColor: 'orange',
    },
    {
      type: 'Bank Transfer',
      category: 'Bank Transfer',
      description: 'Send money',
      amount: 100.65,
      icon: 'account_balance',
      iconColor: 'green',
      textColor: 'orange',
    },
  ];

  // project status

  projects: Project[] = [
    {
      name: 'Angular App',
      progress: 90,
      progressColor: 'green',
    },
    {
      name: 'Java Software',
      progress: 54,
      progressColor: 'red',
    },
    {
      name: 'Html Website',
      progress: 68,
      progressColor: 'olive',
    },
    {
      name: 'IOS App',
      progress: 40,
      progressColor: 'orange',
    },
    {
      name: 'Python Project',
      progress: 28,
      progressColor: 'green',
    },
    {
      name: 'Reactjs App',
      progress: 89,
      progressColor: 'olive',
    },
    {
      name: 'Node.js API',
      progress: 75,
      progressColor: 'green',
    },
    {
      name: 'Flutter App',
      progress: 56,
      progressColor: 'orange',
    },
    {
      name: 'C# Application',
      progress: 63,
      progressColor: 'red',
    },
    {
      name: 'JavaScript Tutorial',
      progress: 80,
      progressColor: 'olive',
    },
    {
      name: 'Vue.js Project',
      progress: 45,
      progressColor: 'green',
    },
  ];

  myCompanyStrengths: CompanyStrengthItem[] = [
    {
      skill: 'UX / UI Design',
      progress: 65,
      color: 'primary',
      team: [
        'assets/images/avatars/avatar-1.jpg',
        'assets/images/avatars/avatar-2.jpg',
        'assets/images/avatars/avatar-3.jpg',
      ],
    },
    {
      skill: 'Development',
      progress: 49,
      color: 'warn',
      team: [
        'assets/images/avatars/avatar-3.jpg',
        'assets/images/avatars/avatar-6.jpg',
        'assets/images/avatars/avatar-1.jpg',
      ],
    },
    {
      skill: 'Testing',
      progress: 88,
      color: 'accent',
      team: [
        'assets/images/avatars/avatar-7.jpg',
        'assets/images/avatars/avatar-10.jpg',
        'assets/images/avatars/avatar-4.jpg',
      ],
    },
    {
      skill: 'Marketing',
      progress: 74,
      color: 'primary',
      team: [
        'assets/images/avatars/avatar-8.jpg',
        'assets/images/avatars/avatar-2.jpg',
        'assets/images/avatars/avatar-9.jpg',
      ],
    },
  ];

  // patient group list

  patientGroups = [
    {
      label: 'C',
      title: 'Cholesterol',
      patientCount: 5,
      colorClass: 'bg-orange-500',
    },
    {
      label: 'D',
      title: 'Diabetic',
      patientCount: 14,
      colorClass: 'bg-purple-500',
    },
    {
      label: 'L',
      title: 'Low Blood Pressure',
      patientCount: 10,
      colorClass: 'bg-green-500',
    },
    {
      label: 'H',
      title: 'Hypertension',
      patientCount: 21,
      colorClass: 'bg-cyan-500',
    },
    {
      label: 'M',
      title: 'Malaria',
      patientCount: 11,
      colorClass: 'bg-indigo-500',
    },
    {
      label: 'D',
      title: 'Dental Problem',
      patientCount: 17,
      colorClass: 'bg-brown-500',
    },
    {
      label: 'A',
      title: 'Asthma',
      patientCount: 8,
      colorClass: 'bg-yellow-500',
    },
    {
      label: 'R',
      title: 'Rheumatoid Arthritis',
      patientCount: 9,
      colorClass: 'bg-red-500',
    },
    {
      label: 'S',
      title: 'Stroke',
      patientCount: 6,
      colorClass: 'bg-blue-500',
    },
  ];

  // booking data

  bookingData = [
    {
      name: 'Delux Room',
      progress: 65,
      color: 'primary',
      images: [
        'assets/images/rooms/double.jpg',
        'assets/images/rooms/vila.jpg',
        'assets/images/rooms/single.jpg',
      ],
    },
    {
      name: 'Super Delux',
      progress: 49,
      color: 'warn',
      images: [
        'assets/images/rooms/vila.jpg',
        'assets/images/rooms/super-delux.jpg',
        'assets/images/rooms/delux.jpg',
      ],
    },
    {
      name: 'Vila',
      progress: 88,
      color: 'accent',
      images: [
        'assets/images/rooms/delux.jpg',
        'assets/images/rooms/double.jpg',
        'assets/images/rooms/vila.jpg',
      ],
    },
  ];

  // rating data

  ratingData = {
    averageRating: 4.8,
    reviews: [
      { stars: 5, percentage: 85, count: 547 },
      { stars: 4, percentage: 42, count: 128 },
      { stars: 3, percentage: 22, count: 98 },
      { stars: 2, percentage: 10, count: 55 },
      { stars: 1, percentage: 5, count: 10 },
    ],
  };
}
