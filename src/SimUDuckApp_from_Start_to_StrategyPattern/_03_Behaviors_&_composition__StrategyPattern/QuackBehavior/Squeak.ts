import QuackBehavior from ".";

class Squeak implements QuackBehavior {
  quack(): void {
    console.log("Squeak");
  }
}

export default Squeak;