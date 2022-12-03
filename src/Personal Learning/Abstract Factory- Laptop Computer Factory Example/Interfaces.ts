interface IStorage {
  getStorageType(): string;
}

interface IProcessor {
  attachStorage(storage: IStorage): string;

  showSpecs(): string;
}

export { IProcessor, IStorage };
