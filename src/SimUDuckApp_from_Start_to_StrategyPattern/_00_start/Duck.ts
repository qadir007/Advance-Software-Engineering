abstract class Duck {
  public quack(): void {
    console.log("Quack");
  }

  public swim(): void {
    console.log("Swim");
  }

  abstract display(): void;
}

export default Duck