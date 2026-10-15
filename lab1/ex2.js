'use strict';

const dataArray = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  null, undefined, { name: 'Alice' }, [1, 2, 3], NaN,
  true, 'JavaScript', 0, 5.25, NaN,
];

const typesCount = {
  number: 0,
  string: 0,
  boolean: 0,
  undefined: 0,
  object: 0,
};

for (const element of dataArray) {
  const elementType = typeof element;
  typesCount[elementType] += 1;
}

console.dir(typesCount);

const typesCountDynamic = {};

for (const element of dataArray) {
  const elementType = typeof element;

  if (!(elementType in typesCountDynamic)) {
    typesCountDynamic[elementType] = 0;
  }

  typesCountDynamic[elementType] += 1;
}

console.dir(typesCountDynamic);

