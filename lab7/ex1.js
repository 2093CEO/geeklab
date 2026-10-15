'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);

  if (index !== -1) {
    array.splice(index, 1);
  }
};

const values = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(values, 'Lima');
removeElement(values, 'Berlin');
console.log(values);

