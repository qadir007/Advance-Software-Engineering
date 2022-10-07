import MenuItem from "../_00_/MenuItem";

interface MyIterator {
  hasNext(): boolean;
  next(): MenuItem;
}

export default MyIterator;