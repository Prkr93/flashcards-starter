class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    if(this.card.correctAnswer === this.guess) {
      return true;
    }
    else return false;
  }
  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!';
  }
}

module.exports = Turn;
