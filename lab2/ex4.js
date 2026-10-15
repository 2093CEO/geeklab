'use strict';

const fn = () => {
  const fixedObject = { name: 'Roman' };
  let changeableObject = { name: 'Kan' };

  fixedObject.name = 'Yeat';
  changeableObject.name = 'Kankan';

  // const нельзя переназначить.
  changeableObject = { name: 'Roman' };

  console.dir(fixedObject);
  console.dir(changeableObject);
};

fn();

const createUser = (name, city) => ({ name, city });

console.dir(createUser('Roman', 'Kyiv'));


