'use strict';

const check = function(num) {
  const numArr = String(num).split("");
  for (var i = numArr.length-2; i >= 0; i--) {
    if (i % 2 !== 0) {
      numArr[i] *= 2;
      if (numArr[i] > 9) {
        numArr[i] = String(numArr[i]).split("");
        numArr[i] = Number(numArr[i][0]) + Number(numArr[i][1]);
      }
    }
    if (typeof numArr[i] !== "number") {
      numArr[i] = Number(numArr[i])
    }
  }
  const numbers = numArr.slice(0, numArr.length - 1)
  const sum = numbers.reduce(function(a, b) {
    return a + b;
  }, 0);

  const final = (sum * Number(numArr.length-2)) % 10;

  if (final === Number(numArr[numArr.length-1])) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  check: check
};
