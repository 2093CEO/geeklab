'use strict';

const { EventEmitter } = require('node:events');

const composeSafe = (...functions) => {
  for (const fn of functions) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments must be functions');
    }
  }

  const events = new EventEmitter();
  const composed = (value) => {
    try {
      return functions.reduceRight((result, fn) => fn(result), value);
    } catch (error) {
      if (events.listenerCount('error') > 0) {
        events.emit('error', error);
      }

      return undefined;
    }
  };

  composed.on = (event, listener) => {
    events.on(event, listener);
    return composed;
  };

  return composed;
};

const inc = (x) => x + 1;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;
const calculate = composeSafe(cube, twice, inc);

calculate.on('error', (error) => console.log(error.message));
console.log(calculate(5));

