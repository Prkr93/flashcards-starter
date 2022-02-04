const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');

describe('Round', function() {
  const card1 = new Card(1, 'What is my fav color?', ['green', 'blue', 'red'], 'blue');
  const card2 = new Card(1, 'What is my fav food?', ['potatoes', 'pizza', 'pasta'], 'potatoes');
  const card3 = new Card(1, 'What is my fav new word?', ['nebulous', 'verbose', 'lavascript'], 'lavascript');
  const deck = new Deck([card1, card2, card3]);
  it('should be a function', function() {
    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card', function() {
    const round = new Round(deck, deck.length);
    expect(round.returnCard()).to.equal(deck.cards[0]);
  });

  it('should be able to take a turn', function() {
  //new turn instance is created, update turn count,
  //next card becomes current, evaluate guess, stores id of incorrect,
  //give feedback
    const round = new Round(deck);
    round.takeTurn('blue');
    expect(round.turnID).to.equal(2);
    expect(round.incorrectCards.length).to.equal(0);
  });

  it('should be able to store incorrect guesses', function() {
    const round = new Round(deck);
    round.takeTurn('red');
    expect(round.incorrectCards.length).to.equal(1);
  });

  it('should be able to calculate and return the percent correct', function() {
    const round = new Round(deck);
    round.takeTurn('blue');
    expect(round.calculatePercentCorrect()).to.equal('100% correct!');
  });

  it('should be able to calculate and return the percent correct', function() {
    const round = new Round(deck);
    round.takeTurn('red');
    expect(round.calculatePercentCorrect()).to.equal('0% correct!');
  });

  it('should print something when the round is over', function() {
    const round = new Round(deck);
    round.takeTurn('blue');
    round.takeTurn('potatoes');
    round.takeTurn('lavascript');
    round.endRound();
  });

});
