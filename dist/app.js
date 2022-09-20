"use strict";
// Singleton Pattern
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChocolateBoiler_1 = __importDefault(require("./Singleton/_02_The_Chocolate_Factory_to_Singleton/ChocolateBoiler"));
const chocolateBoiler = ChocolateBoiler_1.default.getInstance();
chocolateBoiler.boil();
chocolateBoiler.drain();
chocolateBoiler.fill();
const isEmpty = chocolateBoiler.isEmpty();
const isBoiled = chocolateBoiler.isBoiled();
console.log("isEmpty -> ", isEmpty, ", isBoilded -> ", isBoiled);
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
//# sourceMappingURL=app.js.map