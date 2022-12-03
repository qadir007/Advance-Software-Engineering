interface ISubject {
  attachObserver(observer: Observer): void;
  dettachObserver(observer: Observer): void;
  notifyObserver(): void;
}

// Observer/Subscriber Interface
interface Observer {
  update(subject: ISubject): void;
}

export { ISubject, Observer };
