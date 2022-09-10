import Duck from "./Duck";
import FlyWithWings from "./FlyBehavior/FlyWithWings";
import Quack from "./QuackBehavior/Quack";

class MallardDuck extends Duck {

  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings()
  }

  display(): void {
    console.log("MAllard Duck Display");
  }
}

export default MallardDuck;
