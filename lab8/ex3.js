'use strict';

const isType = (value, Type) => {
  if (Type === Number) return typeof value === 'number';
  if (Type === String) return typeof value === 'string';
  if (Type === Boolean) return typeof value === 'boolean';
  if (Type === Array) return Array.isArray(value);
  if (Type === Object) return value !== null && typeof value === 'object';
  if (Type === Function) return typeof value === 'function';

  return value instanceof Type;
};

const contract = (fn, ...types) => {
  const argumentTypes = types.slice(0, -1);
  const resultType = types[types.length - 1];

  return (...args) => {
    if (args.length !== argumentTypes.length) {
      throw new TypeError('Unexpected number of arguments');
    }

    for (let i = 0; i < argumentTypes.length; i += 1) {
      if (!isType(args[i], argumentTypes[i])) {
        throw new TypeError('Wrong type for argument ' + (i + 1));
      }
    }

    const result = fn(...args);

    if (!isType(result, resultType)) {
      throw new TypeError('Wrong result type');
    }

    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3));

const concat = (first, second) => first + second;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings('Hello ', 'world!'));

