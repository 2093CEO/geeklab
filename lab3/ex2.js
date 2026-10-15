'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, chars) => {
  let key = '';

  for (let i = 0; i < length; i += 1) {
    const index = Math.floor(Math.random() * chars.length);
    key += chars[index];
  }

  return key;
};

console.log(generateKey(16, characters));

