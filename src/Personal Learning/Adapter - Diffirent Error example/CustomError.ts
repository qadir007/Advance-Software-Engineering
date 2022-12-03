export default class CustomError  {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  serialize() {
    return this.message;
  }
}
