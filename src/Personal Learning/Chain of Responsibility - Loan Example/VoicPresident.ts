import Loan from "./Loan";
import LoanApprover from "./LoanApprover";

class VoicPresident extends LoanApprover {
  public approveLoan(loan: Loan) {
    console.log(
      "Loan Ammount of " + loan.amount + " approved by Voic President"
    );
  }
}

export default VoicPresident;
