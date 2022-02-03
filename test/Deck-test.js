const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should contain an array of Card objects', function() {
    const card1 = new Card(1);
    const card2 = new Card(2);
    const card3 = new Card(3);
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    expect(deck.cards).to.be.an('array');
  });

  it('should know how many cards are in the deck', function() {
    const card1 = new Card(1);
    const card2 = new Card(2);
    const card3 = new Card(3);
    const cards = [card1, card2, card3];
    const deck = new Deck(cards, cards.length);
    expect(deck.numOfCards).to.equal(3);
  });
});
