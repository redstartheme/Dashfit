import { formatDate } from '@angular/common';

export class CancelledBookings {
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
  cancellationDate: string;
  cancellationStatus: string;
  refundStatus: string;
  cancellationFee: string;
  reason: string;

  constructor(cancelledBookings: Partial<CancelledBookings> = {}) {
    this.id = cancelledBookings.id || this.getRandomID();
    this.img = cancelledBookings.img || 'assets/images/avatars/avatar.jpg';
    this.fName = cancelledBookings.fName || '';
    this.lName = cancelledBookings.lName || '';
    this.email = cancelledBookings.email || '';
    this.package = cancelledBookings.package || '';
    this.checkIn =
      cancelledBookings.checkIn || formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.checkOut =
      cancelledBookings.checkOut || formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.mobile = cancelledBookings.mobile || '';
    this.roomType = cancelledBookings.roomType || '';
    this.status = cancelledBookings.status || 'Cancelled';
    this.payment = cancelledBookings.payment || '';
    this.cancellationDate =
      cancelledBookings.cancellationDate ||
      formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.cancellationStatus = cancelledBookings.cancellationStatus || 'Pending';
    this.refundStatus = cancelledBookings.refundStatus || 'Pending';
    this.cancellationFee = cancelledBookings.cancellationFee || '0.00';
    this.reason = cancelledBookings.reason || '';
  }

  private getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
