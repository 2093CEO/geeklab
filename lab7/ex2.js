'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);

    if (index !== -1) {
      array.splice(index, 1);
    }
  }
};

const values = [1, 2, 3, 4, 5, 6, 7];
removeElements(values, 5, 1, 6);
console.log(values);

