import { formatDate } from '@angular/common';
export class AllBookings {
  id: number;
  img: string;
  fName: string;
  lName: string;
  email: string;
  package: string;
  checkIn: string;
  checkOut: string;
  mobile: string;
  roomType: string;
  status: string;
  payment: string;
  constructor(allBookings: AllBookings) {
    {
      this.id = allBookings.id || this.getRandomID();
      this.img = allBookings.img || 'assets/images/avatars/avatar.jpg';
      this.fName = allBookings.fName || '';
      this.lName = allBookings.lName || '';
      this.email = allBookings.email || '';
      this.package = allBookings.package || '';
      this.checkIn = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.checkOut = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.mobile = allBookings.mobile || '';
      this.roomType = allBookings.roomType || '';
      this.status = allBookings.status || '';
      this.payment = allBookings.payment || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
