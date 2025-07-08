export class AllRooms {
  id: number;
  img: string;
  meal: string;
  roomNo: string;
  acNonac: string;
  mobile: string;
  roomType: string;
  rent: string;
  capacity: string;
  status: string;

  constructor(allRooms: AllRooms) {
    {
      this.id = allRooms.id || this.getRandomID();
      this.img = allRooms.img || 'assets/images/rooms/single.jpg';
      this.meal = allRooms.meal || '';
      this.capacity = allRooms.capacity || '';
      this.roomNo = allRooms.roomNo || '';
      this.acNonac = allRooms.acNonac || '';
      this.mobile = allRooms.mobile || '';
      this.roomType = allRooms.roomType || '';
      this.status = allRooms.status || '';
      this.rent = allRooms.rent || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
