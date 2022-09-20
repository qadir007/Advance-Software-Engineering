class ChocolateBoiler {
  private empty: Boolean;
  private boiled: Boolean;

  public ChocolateBoiler() {
    this.empty = true;
    this.boiled = true;
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
