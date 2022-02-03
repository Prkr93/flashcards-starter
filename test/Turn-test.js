// Turn class should meet the following requirements:
//
// Instantiated with two arguments - a string (a user’s guess), and a Card object for the current card in play.
// 4 different methods - returnGuess, returnCard, evaluateGuess, and giveFeedback
// evaluateGuess: returns a boolean
// giveFeedback - returns either ‘incorrect!’ or ‘correct!’

const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'array';
    const turn = new Turn(guess, card);
    expect(turn.returnGuess()).to.equal('array');
  });

  it('should be able to return a card', function() {
    const card = new Card(2, 'What is my favorite color?', ['green', 'blue', 'red'], 'blue');
    const guess = 'blue';
    const turn = new Turn(guess, card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to tell if that guess is correct or not', function() {
    const card1 = new Card(2, 'What is my favorite color?', ['green', 'blue', 'red'], 'blue');
    const guess1 = 'blue';
    const turn1 = new Turn(guess1, card1);
    const card2 = new Card(3, 'What is my favorite food?', ['celery', 'pizza', 'french fries'], 'pizza');
    const guess2 = 'celery';
    const turn2 = new Turn(guess2, card2);

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should be able to give the user feedback', function() {
    const card1 = new Card(2, 'What is my favorite color?', ['green', 'blue', 'red'], 'blue');
    const guess1 = 'blue';
    const turn1 = new Turn(guess1, card1);
    const card2 = new Card(3, 'What is my favorite food?', ['celery', 'pizza', 'french fries'], 'pizza');
    const guess2 = 'celery';
    const turn2 = new Turn(guess2, card2);

    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
