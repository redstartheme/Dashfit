export class AllDepartments {
  id: number;
  img: string;
  dName: string;
  hod: string;
  mobile: string;
  email: string;
  totalStaff: string;

  constructor(allDepartments: AllDepartments) {
    {
      this.id = allDepartments.id || this.getRandomID();
      this.img = allDepartments.img || 'assets/images/avatars/avatar-1.jpg';
      this.dName = allDepartments.dName || '';
      this.hod = allDepartments.hod || '';
      this.mobile = allDepartments.mobile || '';
      this.email = allDepartments.email || '';
      this.totalStaff = allDepartments.totalStaff || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
