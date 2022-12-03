import { IProcessor, IStorage } from "./Interfaces";

export default interface ILaptopFactory {
  createProcessor(): IProcessor;

  createStorage(): IStorage;
}
