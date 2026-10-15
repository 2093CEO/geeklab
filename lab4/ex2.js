'use strict';

const sum = (...args) => {
  let result = 0;

  for (const number of args) {
    result += number;
  }

  return result;
};

console.log(sum(1, 2, 3));
console.log(sum());

