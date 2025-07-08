import { formatDate } from '@angular/common';

export class LeaveType {
  id: string;
  leaveName: string;
  leaveUnit: string;
  type: string;
  status: string;
  note: string;
  createdAt: string;
  updatedAt: string;
  minimumDays: number;
  maximumDays: number;
  accrualRate: string;
  carryOverLimit: number;
  approvalRequired: boolean;
  eligibilityCriteria: string;
  requestPeriod: string;
  departmentRestrictions: string;
  balance: number | null;
  policyDocument: string;
  holidayImpact: string;
  sickLeaveIncluded: boolean;
  integration: string;

  constructor(leaveType: Partial<LeaveType> = {}) {
    this.id = leaveType.id || this.getRandomID();
    this.leaveName = leaveType.leaveName || '';
    this.leaveUnit = leaveType.leaveUnit || 'Days';
    this.type = leaveType.type || 'Paid';
    this.status = leaveType.status || 'Active';
    this.note = leaveType.note || '';
    this.createdAt =
      leaveType.createdAt || formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.updatedAt =
      leaveType.updatedAt || formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.minimumDays = leaveType.minimumDays || 1;
    this.maximumDays = leaveType.maximumDays || 30;
    this.accrualRate = leaveType.accrualRate || 'Yearly';
    this.carryOverLimit = leaveType.carryOverLimit || 0;
    this.approvalRequired = leaveType.approvalRequired || false;
    this.eligibilityCriteria = leaveType.eligibilityCriteria || '';
    this.requestPeriod = leaveType.requestPeriod || '';
    this.departmentRestrictions = leaveType.departmentRestrictions || 'None';
    this.balance = leaveType.balance || null;
    this.policyDocument = leaveType.policyDocument || '';
    this.holidayImpact = leaveType.holidayImpact || 'No impact';
    this.sickLeaveIncluded = leaveType.sickLeaveIncluded || false;
    this.integration = leaveType.integration || 'HRMS';
  }

  private getRandomID(): string {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4().toString(16) + S4().toString(16);
  }
}
