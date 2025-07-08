export class RoomTypes {
  id: number;
  img: string;
  shortCode: string;
  roomNo: string;
  acNonac: string;
  roomType: string;
  rent: string;
  noOfRooms: string;
  capacity: string;
  status: string;

  constructor(roomTypes: RoomTypes) {
    {
      this.id = roomTypes.id || this.getRandomID();
      this.img = roomTypes.img || 'assets/images/rooms/single.jpg';
      this.capacity = roomTypes.capacity || '';
      this.roomNo = roomTypes.roomNo || '';
      this.acNonac = roomTypes.acNonac || '';
      this.shortCode = roomTypes.shortCode || '';
      this.roomType = roomTypes.roomType || '';
      this.noOfRooms = roomTypes.noOfRooms || '';
      this.status = roomTypes.status || '';
      this.rent = roomTypes.rent || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
