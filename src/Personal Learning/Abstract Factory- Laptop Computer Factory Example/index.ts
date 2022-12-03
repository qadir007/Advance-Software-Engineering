import ILaptopFactory from "./ILaptopFactory";
import { IProcessor } from "./Interfaces";
import { Laptop } from "./Laptop";

export const buildLaptop = (laptopFactory: ILaptopFactory): IProcessor => {
  const processor = laptopFactory.createProcessor();

  const storage = laptopFactory.createStorage();

  processor.attachStorage(storage);

  return processor;
};

const abstractFactoryTesting = () => {
  const myNewLaptop = buildLaptop(new Laptop(120));
  console.log(myNewLaptop.showSpecs());
};

export default abstractFactoryTesting;
