// ----------------------------------------------------------------------------------------------
// OSI Modal 

import { decode, encode } from "./OSIModalImplementation";

encode()
decode()

// ----------------------------------------------------------------------------------------------

// Iterator Design Pattern

// import DinerMenu from "./Iterator_Design_Pattern/_01_/DinerMenu";
// import PancakeHouseMenu from "./Iterator_Design_Pattern/_01_/PancakeHouseMenu";
// import Waitress from "./Iterator_Design_Pattern/_01_/Waitress";

// const pancakeHouseMenu: PancakeHouseMenu = new PancakeHouseMenu();
// const dinerMenu: DinerMenu = new DinerMenu();

// const waitress: Waitress = new Waitress(pancakeHouseMenu, dinerMenu);

// waitress.printMenu();

// ------------------------------------------------------------------------------------------------

// Singleton Pattern

// import ChocolateBoiler from "./Singleton/_02_The_Chocolate_Factory_to_Singleton/ChocolateBoiler";

// const chocolateBoiler = ChocolateBoiler.getInstance();

// chocolateBoiler.boil();
// chocolateBoiler.drain();
// chocolateBoiler.fill();
// const isEmpty = chocolateBoiler.isEmpty();
// const isBoiled = chocolateBoiler.isBoiled();

// console.log("isEmpty -> ", isEmpty, ", isBoilded -> ", isBoiled);

// ---------------------------------------------------------------------------------------------------------
// Strategy Pattern

// import FlyNoWay from "./SimUDuckApp_from_Start_to_StrategyPattern/_03_Behaviors_&_composition__StrategyPattern/FlyBehavior/FlyNoWay";
// import MallardDuck from "./SimUDuckApp_from_Start_to_StrategyPattern/_03_Behaviors_&_composition__StrategyPattern/MallardDuck";
// import Squeak from "./SimUDuckApp_from_Start_to_StrategyPattern/_03_Behaviors_&_composition__StrategyPattern/QuackBehavior/Squeak";

// const mallardDuck = new MallardDuck();

// mallardDuck.swim()
// mallardDuck.display()

// mallardDuck.setFlyBehavior(new FlyNoWay());
// mallardDuck.performFly()

// mallardDuck.setQuackBehavior(new Squeak());
// mallardDuck.performQuack()
