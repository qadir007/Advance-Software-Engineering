import Duck from "./Duck";
import Flyable from "./Flyable";
import Quackable from "./Quackable";

class MallardDuck extends Duck implements Flyable, Quackable {
  fly(): void {
    console.log("Mallard fly");
    
  }
  quack(): void {
    console.log("Mallard quack");
    
  }
  display(): void {
    console.log("MAllard Duck Display");
  }
}

export default MallardDuck;
