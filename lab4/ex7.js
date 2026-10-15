'use strict';

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

const ages = (people) => {
  const result = {};

  for (const person in people) {
    if (Object.prototype.hasOwnProperty.call(people, person)) {
      result[person] = people[person].died - people[person].born;
    }
  }

  return result;
};

console.log(ages(persons));

