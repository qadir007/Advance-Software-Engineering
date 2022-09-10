import FlyNoWay from "./SimUDuckApp_from_Start_to_StrategyPattern/_03_Behaviors_&_composition__StrategyPattern/FlyBehavior/FlyNoWay";
import MallardDuck from "./SimUDuckApp_from_Start_to_StrategyPattern/_03_Behaviors_&_composition__StrategyPattern/MallardDuck";
import Squeak from "./SimUDuckApp_from_Start_to_StrategyPattern/_03_Behaviors_&_composition__StrategyPattern/QuackBehavior/Squeak";

const mallardDuck = new MallardDuck();

mallardDuck.swim()
mallardDuck.display()

mallardDuck.setFlyBehavior(new FlyNoWay());
mallardDuck.performFly()

mallardDuck.setQuackBehavior(new Squeak());
mallardDuck.performQuack()

