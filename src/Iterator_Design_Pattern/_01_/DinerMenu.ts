import MenuItem from "../_00_/MenuItem";
import DinerMenuIterator from "./DinerMenuIterator";
import MyIterator from "./MyIterator";

class DinerMenu {
  static MAX_ITEMS: number = 6;
  numberOfItems: number = 0;
  menuItems: MenuItem[] = [];

  constructor() {
    this.addItem(
      "K&B's Pancake Breakfast",
      "Pancakes with scrambled eggs and toast",
      true,
      2.99
    );
    this.addItem(
      "Regular Pancake Breakfast",
      "Pancakes with scrambled eggs and toast",
      false,
      2.99
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem: MenuItem = new MenuItem(
      name,
      description,
      vegetarian,
      price
    );
    if (this.numberOfItems > DinerMenu.MAX_ITEMS) {
      console.log("Sorry, menu is full! Can't add item to menu");
    } else {
      this.menuItems.push(menuItem);
      this.numberOfItems += 1;
    }
  }

  // public getMenuItems() {
  //   return this.menuItems;
  // }

  public createIterator(): MyIterator {    
    return new DinerMenuIterator(this.menuItems);
  }
}

export default DinerMenu;
