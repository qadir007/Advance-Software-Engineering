import Duck from "./Duck";

class MallardDuck extends Duck {

  constructor() {
    super();
  }

  display(): void {
    console.log("MAllard Duck Display");
  }
}

export default MallardDuck;
