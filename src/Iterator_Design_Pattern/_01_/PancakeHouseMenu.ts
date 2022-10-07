import MenuItem from "../_00_/MenuItem";
import DinerMenuIterator from "./DinerMenuIterator";
import MyIterator from "./MyIterator";

class PancakeHouseMenu {
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
    this.menuItems.push(menuItem);
  }

  // public getMenuItems() {
  //   return this.menuItems;
  // }
  public createIterator(): MyIterator {
    return new DinerMenuIterator(this.menuItems);
  }
}

export default PancakeHouseMenu;