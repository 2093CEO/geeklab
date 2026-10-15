'use strict';

const iface = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
  m4: 'not a function',
};

const inspectFunctions = (object) => {
  const result = [];

  for (const name in object) {
    if (Object.prototype.hasOwnProperty.call(object, name)) {
      const value = object[name];

      if (typeof value === 'function') {
        result.push([name, value.length]);
      }
    }
  }

  return result;
};

console.log(inspectFunctions(iface));

