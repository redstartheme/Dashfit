import { formatDate } from '@angular/common';

export class CabBooking {
  bookingId: string;
  guestName: string;
  hotelRoomNumber: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  dropoffDate: string;
  cabModel: string;
  licensePlate: string;
  bookingStatus: string;
  driverName: string;
  driverContact: string;
  amount: number;
  specialRequests: string;
  bookingSource: string;

  constructor(booking: Partial<CabBooking> = {}) {
    this.bookingId = booking.bookingId || this.getRandomID();
    this.guestName = booking.guestName || '';
    this.hotelRoomNumber = booking.hotelRoomNumber || '';
    this.pickupLocation = booking.pickupLocation || '';
    this.dropoffLocation = booking.dropoffLocation || '';
    this.pickupDate =
      booking.pickupDate || formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss', 'en');
    this.dropoffDate =
      booking.dropoffDate ||
      formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss', 'en');
    this.cabModel = booking.cabModel || '';
    this.licensePlate = booking.licensePlate || '';
    this.bookingStatus = booking.bookingStatus || '';
    this.driverName = booking.driverName || '';
    this.driverContact = booking.driverContact || '';
    this.amount = booking.amount || 0;
    this.specialRequests = booking.specialRequests || '';
    this.bookingSource = booking.bookingSource || '';
  }

  public getRandomID(): string {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4().toString(16) + S4().toString(16);
  }
}
