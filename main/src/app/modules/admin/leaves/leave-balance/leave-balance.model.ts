export class LeaveBalance {
  employeeId: string;
  employeeName: string;
  department: string;
  designation: string;
  leaveType: string;
  totalEntitlement: string;
  leaveTaken: string;
  leaveBalance: string;
  carryForward: string;
  accrualRate: string;
  notes: string;
  img?: string;

  constructor(balance: Partial<LeaveBalance> = {}) {
    this.employeeId = balance.employeeId || '';
    this.employeeName = balance.employeeName || '';
    this.department = balance.department || '';
    this.designation = balance.designation || '';
    this.leaveType = balance.leaveType || '';
    this.totalEntitlement = balance.totalEntitlement || '0 days';
    this.leaveTaken = balance.leaveTaken || '0 days';
    this.leaveBalance = balance.leaveBalance || '0 days';
    this.carryForward = balance.carryForward || '0 days';
    this.accrualRate = balance.accrualRate || '0 days/month';
    this.notes = balance.notes || '';
    this.img = balance.img || 'assets/images/avatars/avatar.jpg';
  }

  // Generate a random ID if needed, though it's less common for leave balances
  public getRandomID(): string {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4().toString(16) + S4().toString(16);
  }
}
