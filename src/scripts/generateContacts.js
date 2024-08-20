import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  let contactArray = [];

  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    contactArray.push(newContact);
  }

  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    console.log(data);
    const readFileContact = JSON.parse(data);
    console.log(readFileContact);

    const updateContact = [...readFileContact, ...contactArray];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updateContact, null, 2),
      'utf-8',
    );
    console.log(`Додано успішно - ${number} контактів`);
  } catch (error) {
    console.error('error generating contacts:', error);
  }
};

generateContacts(3);
