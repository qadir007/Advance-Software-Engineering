import Loan from "./Loan";
import LoanApprover from "./LoanApprover";

class Manager extends LoanApprover {
  public approveLoan(loan: Loan) {
    if (loan.amount < 1000) {
      console.log("Loan Ammount of " + loan.amount + " approved by Manager");
    } else {
      this.nextApprover.approveLoan(loan);
    }
  }
}

export default Manager;
