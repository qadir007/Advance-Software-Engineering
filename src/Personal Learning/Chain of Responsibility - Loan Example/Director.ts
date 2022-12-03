import Loan from "./Loan";
import LoanApprover from "./LoanApprover";

class Director extends LoanApprover {
  public approveLoan(loan: Loan) {
    if (loan.amount < 2500) {
      console.log("Loan Ammount of " + loan.amount + " approved by Director");
    } else {
      this.nextApprover.approveLoan(loan);
    }
  }
}

export default Director;
