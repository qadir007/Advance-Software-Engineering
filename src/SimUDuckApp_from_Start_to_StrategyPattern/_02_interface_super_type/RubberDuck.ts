import Duck from "./Duck";
import Quackable from "./Quackable";

class RubberDuck extends Duck implements Quackable{
  quack(): void {
    console.log("Rubber Duck quack");
    
  }
  display(): void {
    console.log("RubberDuck Duck Display");
  }
}

export default RubberDuck;
