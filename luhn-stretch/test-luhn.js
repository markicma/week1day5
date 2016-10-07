'use strict';

const assert = require("chai").assert;
const should = require("chai").should();
const checkLuhn = require("./luhn");

describe("Luhn Checker", function() {
  it("Should return a boolean", function() {
    checkLuhn.check(79927398713).should.be.a('boolean');
  });

  it("Should return true if the number follows the Luhn Algorithm", function() {
    assert.isTrue(checkLuhn.check(79927398713));
  });

  it("Should return false if the number doesn't follow the Luhn Algorithm", function() {
    assert.isFalse(checkLuhn.check(79927398718));
  });

});
