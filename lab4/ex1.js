'use strict';

const sum = (...args) => {
  let result = 0;

  for (let i = 0; i < args.length; i += 1) {
    result += args[i];
  }

  return result;
};

console.log(sum(1, 2, 3));
console.log(sum());

