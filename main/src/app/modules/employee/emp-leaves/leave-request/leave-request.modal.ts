import { formatDate } from '@angular/common';

export class LeaveRequest {
  requestId: string;
  employeeId: string;
  employeeName: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  status: string;
  reason: string;
  applyDate: string;
  dayType: string;

  constructor(leaveRequest: Partial<LeaveRequest> = {}) {
    this.requestId = leaveRequest.requestId || '';
    this.employeeId = leaveRequest.employeeId || '';
    this.employeeName = leaveRequest.employeeName || '';
    this.leaveType = leaveRequest.leaveType || '';
    this.startDate =
      leaveRequest.startDate || formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.endDate =
      leaveRequest.endDate || formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.status = leaveRequest.status || '';
    this.reason = leaveRequest.reason || '';
    this.applyDate =
      leaveRequest.applyDate || formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.dayType = leaveRequest.dayType || '';
  }

  public getFormattedStartDate(): string {
    return formatDate(this.startDate, 'MM/dd/yyyy', 'en');
  }

  public getFormattedEndDate(): string {
    return formatDate(this.endDate, 'MM/dd/yyyy', 'en');
  }

  public getFormattedApplyDate(): string {
    return formatDate(this.applyDate, 'MM/dd/yyyy', 'en');
  }
}
