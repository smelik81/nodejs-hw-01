import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';
import updateContact from './updateContacts.js';

const generateContacts = async (number) => {
  let contactArray = [];

  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    contactArray.push(newContact);
  }

  try {
    const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    /* const updateContacts = [...data, ...contactArray];*/
    data.push(...contactArray);
    await updateContact(data);
    console.log(`Додано успішно - ${number} контактів`);
  } catch (error) {
    console.error('error generating contacts:', error);
  }
};

generateContacts(2);
