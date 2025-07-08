export class AllStaffs {
  id: number;
  img: string;
  date: string;
  name: string;
  designation: string;
  mobile: string;
  email: string;
  address: string;

  constructor(allStaffs: AllStaffs) {
    {
      this.id = allStaffs.id || this.getRandomID();
      this.img = allStaffs.img || 'assets/images/avatars/avatar-1.jpg';
      this.date = allStaffs.date || '';
      this.address = allStaffs.address || '';
      this.name = allStaffs.name || '';
      this.designation = allStaffs.designation || '';
      this.mobile = allStaffs.mobile || '';
      this.email = allStaffs.email || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
