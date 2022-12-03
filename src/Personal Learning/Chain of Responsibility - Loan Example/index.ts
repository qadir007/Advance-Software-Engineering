import Director from "./Director";
import Loan from "./Loan";
import Manager from "./Manager";
import VoicPresident from "./VoicPresident";

const chainOfResponsibiltyTesting = () => {
  const manager = new Manager();
  const director = new Director();
  const voicPresident = new VoicPresident();
  manager.setNextApprover(director);
  director.setNextApprover(voicPresident);
  manager.approveLoan(new Loan(800));
  manager.approveLoan(new Loan(1200));
  manager.approveLoan(new Loan(12000));
};

export default chainOfResponsibiltyTesting