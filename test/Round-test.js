const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');

describe('Round', function() {

  it('should be a function', function() {
    const card = new Card(1, 'What is my favorite color?', ['green', 'blue', 'red'], 'blue');
    const guess = 'red';
    const turn = new Turn(guess, card);
    const round = new Round(turn);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card = new Card(1, 'What is my favorite color?', ['green', 'blue', 'red'], 'blue');
    const guess = 'red';
    const turn = new Turn(guess, card);
    const round = new Round(turn);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card', function() {
    const card = new Card(1, 'What is my favorite color?', ['green', 'blue', 'red'], 'blue');
    const guess = 'red';
    const turn = new Turn(guess, card);
    const round = new Round(turn);
    expect(round.returnCard()).to.equal(card);
  });

  it('should be able to take a turn', function() {
  //new turn instance is created, update turn count,
  //next card becomes current, evaluate guess, stores id of incorrect,
  //give feedback
    const card = new Card(1, 'What is my favorite color?', ['green', 'blue', 'red'], 'blue');
    const guess = 'blue';
    const turn = new Turn(guess, card);
    const round = new Round(turn);
    round.takeTurn();
    expect(round.turnID).to.equal(2);
  });

  it('should be able to store incorrect guesses', function() {
    const card = new Card(1, 'What is my favorite color?', ['green', 'blue', 'red'], 'blue');
    const guess = 'red';
    const turn = new Turn(guess, card);
    const round = new Round(turn);
    round.takeTurn();
    expect(round.incorrectCards.length).to.equal(1);
  });

  it('should be able to calculate and return the percent correct', function() {
    const card = new Card(1, 'What is my favorite color?', ['green', 'blue', 'red'], 'blue');
    const guess = 'blue';
    const turn = new Turn(guess, card);
    const round = new Round(turn);
    round.takeTurn();
    expect(round.calculatePercentCorrect()).to.equal('100% correct!');
  });

  it('should be able to calculate and return the percent correct', function() {
    const card = new Card(1, 'What is my favorite color?', ['green', 'blue', 'red'], 'blue');
    const guess = 'red';
    const turn = new Turn(guess, card);
    const round = new Round(turn);
    round.takeTurn();
    expect(round.calculatePercentCorrect()).to.equal('0% correct!');
  });
  //
  // it('should print something when the round is over', function() {
  //
  // });

});
