'use strict';

const array = () => {
  const items = [];
  const get = (index) => items[index];

  get.push = (value) => items.push(value);
  get.pop = () => items.pop();

  return get;
};

const values = array();
values.push('first');
values.push('second');
values.push('third');

console.log(values(0));
console.log(values(1));
console.log(values(2));
console.log(values.pop());

