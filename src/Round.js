class Round {
  constructor(turn) {
    this.currentCard = turn.card;
    this.incorrectCards = [];
    this.turnID = 1;
    this.turn = turn;
  }
  returnCard() {
    return this.currentCard;
  }
  takeTurn() {
    if(!this.turn.evaluateGuess()) {
      this.incorrectCards.push(this.currentCard.id);
    }
    this.turn.giveFeedback();
    this.turnID += 1;
  }
}

module.exports = Round;
