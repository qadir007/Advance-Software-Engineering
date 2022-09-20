class ChocolateBoiler {
  private empty: Boolean;
  private boiled: Boolean;
  private static uniqueInstance: ChocolateBoiler;

  private ChocolateBoiler() {
    console.log("private");
    
    this.empty = true;
    this.boiled = true;
  }
  public static getInstance(): ChocolateBoiler {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new ChocolateBoiler();
    }
    return this.uniqueInstance;
  }

  public fill(): void {
    if (this.isEmpty()) {
      this.empty = false;
      this.boiled = false;
    }
  }
  public drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      this.empty = true;
    }
  }
  public boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      this.boiled = true;
    }
  }

  public isEmpty(): Boolean {
    return this.empty;
  }
  public isBoiled(): Boolean {
    return this.boiled;
  }
}

export default ChocolateBoiler;
