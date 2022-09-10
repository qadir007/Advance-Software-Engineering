import FlyBehavior from "./FlyBehavior";
import QuackBehavior from "./QuackBehavior";

abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  public swim(): void {
    console.log("Swim");
  }

  abstract display(): void;

  performQuack(): void {
    this.quackBehavior.quack();
  }
  performFly(): void {
    this.flyBehavior.fly();
  }
  setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }
  setQuackBehavior(qb: QuackBehavior): void {
    this.quackBehavior = qb;
  }
}

export default Duck;
