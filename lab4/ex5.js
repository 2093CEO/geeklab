'use strict';

const sum = (...args) => args.reduce((result, number) => result + number, 0);

console.log(sum(1, 2, 3));
console.log(sum());

