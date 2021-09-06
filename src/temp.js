class GuessingGame {
  constructor() {
    this.minimum = null;
    this.maximum = null;
    this.currentCandidate = null;
  }

  setRange(min, max) {
    this.minimum = min;
    this.maximum = max;
  }

  guess() {
    // const guessCandidate = Math.round((this.max - this.min) / 2);
    const guessCandidate = Math.round((this.maximum + this.minimum) / 2);

    this.currentCandidate = guessCandidate;
    return guessCandidate;
  }

  lower() {
    this.maximum = this.currentCandidate;
  }

  greater() {
    this.minimum = this.currentCandidate;
  }
}
