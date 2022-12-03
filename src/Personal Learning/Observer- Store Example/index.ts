import Customer from "./Customer";
import Inventory from "./Inventory";
import Store from "./Subject";


const observerTesting = () => {
  // Instantiating Subject and Observer
  const store = new Store();
  const inventory = new Inventory();
  const customer = new Customer();

  // Subscribing objects to publisher
  store.attachObserver(inventory);
  store.attachObserver(customer);

  // Changing subject state
  store.newProduct(30);
  store.dettachObserver(customer)
  store.newProduct(88);
};

export default observerTesting;