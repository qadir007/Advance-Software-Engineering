import { Observer } from "./ISubject";

// Concrete Observer 1
class Inventory implements Observer {
  update(): void {
    console.log("New product added to the store, updating inventory...");
    // Actual business logic goes here...
  }
}

export default Inventory