'use strict';

const pipe = (...functions) => {
  for (const fn of functions) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments must be functions');
    }
  }

  return (value) => functions.reduce((result, fn) => fn(result), value);
};

const inc = (x) => x + 1;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

console.log(pipe(inc, twice, cube)(5));

