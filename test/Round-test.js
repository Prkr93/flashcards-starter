const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card', function() {

  });

  it('should be able to take a turn', function() {
  //new turn instance is created, update turn count,
  //next card becomes current, evaluate guess, stores id of incorrect,
  //give feedback

  });

  it('should be able to calculate and return the percent correct', function() {

  });

  it('should print something when the round is over', function() {

  });

});
