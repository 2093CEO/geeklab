'use strict';

const inc = (n) => n + 1;

const incObject = (num) => {
  num.n += 1;
};

const a = 5;
const b = inc(a);
console.dir({ a, b });

const obj = { n: 5 };
incObject(obj);
console.dir(obj);

