'use strict';

const seq = (...initialFunctions) => {
  const functions = [...initialFunctions];

  const chain = (next) => {
    if (typeof next === 'number') {
      return functions.reduceRight((value, fn) => fn(value), next);
    }

    functions.push(next);
    return chain;
  };

  return chain;
};

console.log(seq((x) => x + 7)((x) => x * 2)(5));
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));

