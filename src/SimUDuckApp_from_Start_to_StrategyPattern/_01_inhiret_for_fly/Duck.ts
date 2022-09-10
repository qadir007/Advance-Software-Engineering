abstract class Duck {
  public quack(): void {
    console.log("Quack");
  }

  public swim(): void {
    console.log("Swim");
  }
  fly(): void {
    console.log("Fly");
    
  };

  abstract display(): void;
}

export default Duck
