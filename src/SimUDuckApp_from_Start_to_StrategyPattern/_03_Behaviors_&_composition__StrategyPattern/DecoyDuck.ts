import Duck from "./Duck";

class DecoyDuck extends Duck {
  display(): void {
    console.log("DecoyDuck Duck Display");
  }
}

export default DecoyDuck;
