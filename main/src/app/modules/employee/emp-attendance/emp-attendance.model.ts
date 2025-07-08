export class EmpAttendance {
  id: string;
  EmployeeID: string;
  EmployeeName: string;
  Date: string;
  CheckInTime: string;
  CheckOutTime: string;
  HoursWorked: string;
  Status: string;
  Shift: string;
  BreakStart: string;
  BreakEnd: string;
  Notes: string;

  constructor(record: Partial<EmpAttendance>) {
    this.id = record.id || this.getRandomID();
    this.EmployeeID = record.EmployeeID || '';
    this.EmployeeName = record.EmployeeName || '';
    this.Date = record.Date || '';
    this.CheckInTime = record.CheckInTime || '';
    this.CheckOutTime = record.CheckOutTime || '';
    this.HoursWorked = record.HoursWorked || '';
    this.Status = record.Status || '';
    this.Shift = record.Shift || '';
    this.BreakStart = record.BreakStart || '';
    this.BreakEnd = record.BreakEnd || '';
    this.Notes = record.Notes || '';
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
