'use strict';

const sum = (...args) => {
  let result = 0;
  let i = 0;

  if (args.length === 0) {
    return result;
  }

  do {
    result += args[i];
    i += 1;
  } while (i < args.length);

  return result;
};

console.log(sum(1, 2, 3));
console.log(sum());

