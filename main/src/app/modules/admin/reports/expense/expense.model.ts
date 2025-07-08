export class Expense {
  id: number;
  img: string;
  name: string;
  date: string;
  expense: string;
  status: string;
  amount: string;
  pmode: string;
  paidTo: string;
  invoiceNo: string;

  constructor(expense: Expense) {
    {
      this.id = expense.id || this.getRandomID();
      this.img = expense.img || 'assets/images/avatars/avatar-1.jpg';
      this.name = expense.name || '';
      this.date = expense.date || '';
      this.expense = expense.expense || '';
      this.status = expense.status || '';
      this.amount = expense.amount || '';
      this.pmode = expense.pmode || '';
      this.paidTo = expense.paidTo || '';
      this.invoiceNo = expense.invoiceNo || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
