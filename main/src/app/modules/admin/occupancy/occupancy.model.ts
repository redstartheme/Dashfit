export interface PersonalInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface ReservationInfo {
  checkInDate: string; // Use appropriate date format or type
  checkOutDate: string; // Use appropriate date format or type
  bookingReference: string;
}

export interface GuestDetails {
  personalInfo: PersonalInfo;
  reservationInfo: ReservationInfo;
  specialRequests: string;
}

export interface Occupancy {
  id: number;
  roomNo: number;
  type: string;
  bed: string;
  occupants: string;
  status: string; // "Booked" or other statuses
  guestDetails?: GuestDetails; // Optional, as not all rooms may have guest details
}
