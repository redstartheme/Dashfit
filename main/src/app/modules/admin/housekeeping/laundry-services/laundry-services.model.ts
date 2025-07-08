export class LaundryService {
  laundryId: number;
  guestName: string;
  roomNumber: string;
  dateReceived: string;
  dateCompleted: string;
  serviceType: string;
  itemDescription: string;
  quantity: number;
  unitPrice: number;
  totalCost: number;
  specialInstructions: string;
  status: string;
  deliveryDate: string;
  pickupDate: string;
  paymentStatus: string;
  paymentMethod: string;
  employeeAssigned: string;
  comments: string;
  dateOfLastUpdate: string;
  lastUpdatedBy: string;

  constructor(laundryService: Partial<LaundryService> = {}) {
    this.laundryId = laundryService.laundryId || this.getRandomID();
    this.guestName = laundryService.guestName || '';
    this.roomNumber = laundryService.roomNumber || '';
    this.dateReceived = laundryService.dateReceived || '';
    this.dateCompleted = laundryService.dateCompleted || '';
    this.serviceType = laundryService.serviceType || 'Washing';
    this.itemDescription = laundryService.itemDescription || '';
    this.quantity = laundryService.quantity || 0;
    this.unitPrice = laundryService.unitPrice || 0;
    this.totalCost = laundryService.totalCost || 0;
    this.specialInstructions = laundryService.specialInstructions || '';
    this.status = laundryService.status || 'In Progress';
    this.deliveryDate = laundryService.deliveryDate || '';
    this.pickupDate = laundryService.pickupDate || '';
    this.paymentStatus = laundryService.paymentStatus || 'Pending';
    this.paymentMethod = laundryService.paymentMethod || 'Room Charge';
    this.employeeAssigned = laundryService.employeeAssigned || '';
    this.comments = laundryService.comments || '';
    this.dateOfLastUpdate = laundryService.dateOfLastUpdate || '';
    this.lastUpdatedBy = laundryService.lastUpdatedBy || '';
  }

  private getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
