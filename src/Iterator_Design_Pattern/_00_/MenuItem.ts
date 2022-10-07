class MenuItem {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }
  public getDescription(): string {
    return this.description;
  }
  public getPrice(): number {
    return this.price;
  }
  public getVegetarian(): boolean {
    return this.vegetarian;
  }
}

export default MenuItem;