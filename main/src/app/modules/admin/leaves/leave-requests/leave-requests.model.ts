import { formatDate } from '@angular/common';

export class LeaveRequest {
  id: string;
  employeeId: string;
  img: string;
  name: string;
  department: string;
  designation: string;
  contact: string;
  type: string;
  from: string;
  leaveTo: string;
  noOfDays: string;
  status: string;
  approvedBy: string;
  submissionDate: string;
  returnDate: string;
  substitute: string;
  reason: string;
  note: string;

  constructor(leaves: Partial<LeaveRequest> = {}) {
    this.id = leaves.id || this.getRandomID();
    this.employeeId = leaves.employeeId || '';
    this.img = leaves.img || 'assets/images/avatars/avatar.jpg';
    this.name = leaves.name || '';
    this.department = leaves.department || '';
    this.designation = leaves.designation || '';
    this.contact = leaves.contact || '';
    this.type = leaves.type || '';
    this.from = leaves.from || formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.leaveTo = leaves.leaveTo || formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.noOfDays = leaves.noOfDays || '';
    this.status = leaves.status || '';
    this.approvedBy = leaves.approvedBy || '';
    this.submissionDate =
      leaves.submissionDate || formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.returnDate = leaves.returnDate || '';
    this.substitute = leaves.substitute || '';
    this.reason = leaves.reason || '';
    this.note = leaves.note || '';
  }

  public getRandomID(): string {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4().toString(16) + S4().toString(16);
  }
}
