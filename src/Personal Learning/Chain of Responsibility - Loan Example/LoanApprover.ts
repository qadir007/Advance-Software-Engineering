import Loan from "./Loan";

abstract class LoanApprover {
  protected nextApprover: LoanApprover;

  public setNextApprover = (nextApprover: LoanApprover) => {
    this.nextApprover = nextApprover;
  };
  public abstract approveLoan(loan: Loan);
}

export default LoanApprover;
