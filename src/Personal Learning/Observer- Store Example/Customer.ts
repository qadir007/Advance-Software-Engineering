import { Observer } from "./ISubject";

// Concrete Observer 2
class Customer implements Observer {
  update(): void {
    console.log("New product added to the store, I have to go check it out...");
    // Actual business logic goes here...
  }
}
export default Customer;