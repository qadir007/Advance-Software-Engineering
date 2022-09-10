"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FlyNoWay_1 = __importDefault(require("./SimUDuckApp_from_Start_to_StrategyPattern/_03_Behaviors/FlyBehavior/FlyNoWay"));
const MallardDuck_1 = __importDefault(require("./SimUDuckApp_from_Start_to_StrategyPattern/_03_Behaviors/MallardDuck"));
const Squeak_1 = __importDefault(require("./SimUDuckApp_from_Start_to_StrategyPattern/_03_Behaviors/QuackBehavior/Squeak"));
const mallardDuck = new MallardDuck_1.default();
mallardDuck.swim();
mallardDuck.display();
mallardDuck.setFlyBehavior(new FlyNoWay_1.default());
mallardDuck.setQuackBehavior(new Squeak_1.default());
mallardDuck.performQuack();
mallardDuck.performFly();
//# sourceMappingURL=app.js.map