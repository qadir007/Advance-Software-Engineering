import MenuItem from "../_00_/MenuItem";
import MyIterator from "./MyIterator";

class PancakeHouseIterator implements MyIterator {
  position: number = 0;
  menuItems: MenuItem[] = [];

  constructor(menuItems: MenuItem[]) {
    this.menuItems = menuItems;
  }

  hasNext(): boolean {
    if (
      this.position >= this.menuItems.length ||
      this.menuItems[this.position] == null
    )
      return false;
    else return true;
  }

  next(): MenuItem {
    const menuItem: MenuItem = this.menuItems[this.position];
    this.position += 1;
    return menuItem;
  }
}

export default PancakeHouseIterator;