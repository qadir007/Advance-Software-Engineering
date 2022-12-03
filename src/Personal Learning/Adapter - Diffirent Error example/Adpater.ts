import NewCustomError from "./NewCustomError";
// import CustomError from './CustomError'

export default class ErrorAdapter {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  serialize() {
    // In future replace this function
    const e = new NewCustomError(this.message).withInfo();
    return e;
  }
}
