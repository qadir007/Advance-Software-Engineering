import Duck from "./Duck";
import Flyable from "./Flyable";
import Quackable from "./Quackable";

class RedHeadDuck extends Duck implements Flyable, Quackable {
    fly(): void {
       console.log("Red Head fly");
       
    }
    quack(): void {
       console.log("Red Head quack");
       
    }
    display(): void {
       console.log("Red Head Duck Display");
       
    }
}

export default RedHeadDuck