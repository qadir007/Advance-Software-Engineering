import PancakeHouseMenu from "./PancakeHouseMenu";
import DinerMenu from "./DinerMenu";
import MyIterator from "./MyIterator";
import MenuItem from "../_00_/MenuItem";

class Waitress {
  pancakeHouseMenu: PancakeHouseMenu;
  dinerMenu: DinerMenu;

  constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
  }

  printMenu(): void {
    const pancakeIterator: MyIterator = this.pancakeHouseMenu.createIterator();
    const dinerIterator: MyIterator = this.dinerMenu.createIterator();
    console.log("MENU\n----\nBREAKFAST");
    this.printMenuList(pancakeIterator);
    console.log("\nLUNCH");
    this.printMenuList(dinerIterator);
  }

  private printMenuList(iterator: MyIterator): void {
    while (iterator.hasNext()) {
      const menuItem: MenuItem = iterator.next();
      console.log(
        menuItem.getName(),
        ", ",
        menuItem.getPrice() + " -- ",
        menuItem.getDescription()
      );
    }
  }
}

export default Waitress;
