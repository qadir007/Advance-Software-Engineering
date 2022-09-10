import FlyBehavior from ".";

class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("fly no way");
  }
}

export default FlyNoWay;