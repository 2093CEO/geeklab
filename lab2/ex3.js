'use strict';

const average = (a, b) => (a + b) / 2;
const square = (x) => x ** 2;
const cube = (x) => x ** 3;

const calculate = () => {
  const results = [];

  for (let number = 0; number <= 9; number += 1) {
    results.push(average(square(number), cube(number)));
  }

  return results;
};

console.log(calculate());

