export class Cab {
  id: string;
  driverName: string;
  driverContact: string;
  cabModel: string;
  licensePlate: string;
  status: string;
  capacity: number;
  lastServiceDate: string;
  location: string;
  assignedToGuest: boolean;
  bookingCount: number;
  rating: number;
  notes: string;

  constructor(cab: Cab) {
    this.id = cab.id || this.getRandomID();
    this.driverName = cab.driverName || '';
    this.driverContact = cab.driverContact || '';
    this.cabModel = cab.cabModel || '';
    this.licensePlate = cab.licensePlate || '';
    this.status = cab.status || '';
    this.capacity = cab.capacity || 0;
    this.lastServiceDate = cab.lastServiceDate || '';
    this.location = cab.location || '';
    this.assignedToGuest = cab.assignedToGuest || false;
    this.bookingCount = cab.bookingCount || 0;
    this.rating = cab.rating || 0;
    this.notes = cab.notes || '';
  }

  public getRandomID(): string {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4().toString(16) + S4().toString(16);
  }
}
