class Round {
  constructor(currentCard) {
    this.currentCard = currentCard;
    this.incorrectCards = [];
  }
  returnCard() {
    return this.currentCard;
  }
}

module.exports = Round;
