import ILaptopFactory from "./ILaptopFactory";
import { IProcessor, IStorage } from "./Interfaces";
import { MacbookProcessor, MacbookStorage } from "./MacBook";


export class Laptop implements ILaptopFactory {
  storageSize: number;

  constructor(storage: number) {
    this.storageSize = storage;
  }

  createProcessor(): IProcessor {
   return new MacbookProcessor();
  }

  createStorage(): IStorage {
   return new MacbookStorage(this.storageSize);
  }
  
}
