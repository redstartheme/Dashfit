export class Stocks {
  id: number;
  pCode: string;
  pName: string;
  status: string;
  price: string;
  category: string;
  qty: string;

  constructor(stocks: Stocks) {
    {
      this.id = stocks.id || this.getRandomID();
      this.pCode = stocks.pCode || '';
      this.pName = stocks.pName || '';
      this.status = stocks.status || '';
      this.price = stocks.price || '';
      this.category = stocks.category || '';
      this.qty = stocks.qty || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
