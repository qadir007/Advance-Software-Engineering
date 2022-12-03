class Loan {
  public amount: Number = 0;
  public getAmount = () => this.amount;
  constructor(amount: Number) {
    this.amount = amount;
  }
}

export default Loan;
