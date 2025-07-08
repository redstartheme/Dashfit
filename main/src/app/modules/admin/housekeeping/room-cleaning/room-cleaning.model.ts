export class RoomCleaning {
  id: number;
  roomNo: string;
  floor: string;
  guestName: string;
  cleaningStatus: string;
  scheduledDate: string;
  scheduledTime: string;
  assignedStaff: string;
  completionTime: string;
  notes: string;
  priority: string;
  cleaningType: string;
  lastCleanedDate: string;
  frequency: string;

  constructor(roomCleaning: Partial<RoomCleaning> = {}) {
    this.id = roomCleaning.id || this.getRandomID();
    this.roomNo = roomCleaning.roomNo || '';
    this.floor = roomCleaning.floor || '';
    this.guestName = roomCleaning.guestName || '';
    this.cleaningStatus = roomCleaning.cleaningStatus || 'Scheduled';
    this.scheduledDate = roomCleaning.scheduledDate || '';
    this.scheduledTime = roomCleaning.scheduledTime || '';
    this.assignedStaff = roomCleaning.assignedStaff || '';
    this.completionTime = roomCleaning.completionTime || '';
    this.notes = roomCleaning.notes || '';
    this.priority = roomCleaning.priority || 'Standard';
    this.cleaningType = roomCleaning.cleaningType || 'Light Clean';
    this.lastCleanedDate = roomCleaning.lastCleanedDate || '';
    this.frequency = roomCleaning.frequency || 'Daily';
  }

  private getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
