import { ISubject, Observer } from "./ISubject";

class Store implements ISubject {
  private numberOfProducts: number = 0;

  private observers: Observer[] = [];

  attachObserver(observer: Observer): void {
    // Check if the observer has already been attached
    const observerExists = this.observers.find((ob) => ob === observer);

    if (observerExists) {
      throw new Error("Observer has already been subscribed ");
    }

    // Add a new observer
    this.observers.push(observer);
  }

  dettachObserver(observer: Observer): void {
    console.log(`Detaching observer ${JSON.stringify(observer)}`);
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex === -1) {
      throw new Error("Observer does not exist");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Observer detached...");
  }

  notifyObserver(): void {
    console.log("Notifying observers...");

    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  newProduct(products: number): void {
    this.numberOfProducts += products;
    console.log("New product added to the store");
    this.notifyObserver();
  }
}

export default Store;
