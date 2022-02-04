const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.incorrectCards = [];
    this.turnID = 1;
  }
  returnCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    this.currentCard.guess = guess;
    const turn = new Turn(guess, this.currentCard);
    if(!turn.evaluateGuess()) {
      this.incorrectCards.push(this.currentCard.id);
    }
    turn.giveFeedback();
    this.currentCard = this.deck.cards[this.turnID];
    this.turnID += 1;
  }
  calculatePercentCorrect() {
    const total = this.turnID - 1;
    const correct = total - this.incorrectCards.length;
    return `${ correct/total*100 }% correct!`;
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;
