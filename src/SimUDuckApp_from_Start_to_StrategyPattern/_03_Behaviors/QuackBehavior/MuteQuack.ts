import QuackBehavior from ".";

class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log("MuteQuack");
  }
}
export default MuteQuack;