export class LeaveBalance {
  leaveType: string;
  totalLeave: number;
  remainingLeave: number;

  constructor(record: Partial<LeaveBalance>) {
    this.leaveType = record.leaveType || '';
    this.totalLeave = record.totalLeave || 0;
    this.remainingLeave = record.remainingLeave || 0;
  }
}

export class Employee {
  employeeId: string;
  employeeName: string;
  leaveBalances: LeaveBalance[];

  constructor(record: Partial<Employee>) {
    this.employeeId = record.employeeId || '';
    this.employeeName = record.employeeName || '';
    this.leaveBalances = (record.leaveBalances || []).map(
      (leave) => new LeaveBalance(leave)
    );
  }
}
