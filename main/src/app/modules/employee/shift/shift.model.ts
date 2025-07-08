export class EmpShift {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  day: string;
  shiftStartTime: string;
  shiftEndTime: string;
  duration: string;
  department: string;
  role: string;
  location: string;
  supervisor: string;
  shiftType: string;
  status: string;
  notes: string;
  breakStart: string;
  breakEnd: string;
  shiftCoverage: string;
  timeIn: string;
  timeOut: string;
  requests: string;

  constructor(record: Partial<EmpShift>) {
    this.id = record.id || this.getRandomID();
    this.employeeId = record.employeeId || '';
    this.employeeName = record.employeeName || '';
    this.date = record.date || '';
    this.day = record.day || '';
    this.shiftStartTime = record.shiftStartTime || '';
    this.shiftEndTime = record.shiftEndTime || '';
    this.duration = record.duration || '';
    this.department = record.department || '';
    this.role = record.role || '';
    this.location = record.location || '';
    this.supervisor = record.supervisor || '';
    this.shiftType = record.shiftType || '';
    this.status = record.status || '';
    this.notes = record.notes || '';
    this.breakStart = record.breakStart || '';
    this.breakEnd = record.breakEnd || '';
    this.shiftCoverage = record.shiftCoverage || '';
    this.timeIn = record.timeIn || '';
    this.timeOut = record.timeOut || '';
    this.requests = record.requests || '';
  }

  private getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    );
  }
}
