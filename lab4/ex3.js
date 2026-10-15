'use strict';

const sum = (...args) => {
  let result = 0;
  let i = 0;

  while (i < args.length) {
    result += args[i];
    i += 1;
  }

  return result;
};

console.log(sum(1, 2, 3));
console.log(sum());

