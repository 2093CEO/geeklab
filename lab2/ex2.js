'use strict';

const range = (startNumber, endNumber) => {
  const numbers = [];

  for (let number = startNumber; number <= endNumber; number += 1) {
    numbers.push(number);
  }

  return numbers;
};

const rangeOdd = (startNumber, endNumber) => {
  const numbers = range(startNumber, endNumber);
  const oddNumbers = [];

  for (const number of numbers) {
    if (number % 2 !== 0) {
      oddNumbers.push(number);
    }
  }

  return oddNumbers;
};

console.log(range(15, 30));
console.log(rangeOdd(15, 30));

