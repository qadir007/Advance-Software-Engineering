abstract class Duck {
  public swim(): void {
    console.log("Swim");
  }

  abstract display(): void;
}

export default Duck;
