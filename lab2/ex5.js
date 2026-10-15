'use strict';

const phoneBook = [
  { name: 'Yeat', phone: '+1 202-456-1414' },
  { name: 'Kankan', phone: '+1 202-456-1414' },
];

const findPhoneByName = (name) => {
  for (const person of phoneBook) {
    if (person.name === name) {
      return person.phone;
    }
  }

  return undefined;
};

console.log(findPhoneByName('Yeat'));

const phoneBookHash = {
  'Yeat': '+1 202-456-1414',
  Kankan: '+1 202-456-1414',
};

const findPhoneByNameInHash = (name) => phoneBookHash[name];

console.log(findPhoneByNameInHash('Kankan'));


