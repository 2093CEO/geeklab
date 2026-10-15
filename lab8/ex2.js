'use strict';

const store = (value) => () => value;

const read = store(5);
console.log(read());

