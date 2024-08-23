import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import updateContact from './updateContacts.js';

export const removeLastContact = async () => {
  let contacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(data);
    if (contacts.length > 0) contacts.pop();
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found, try another file');
    } else {
      console.error('Error moving contacts:', error);
      throw error;
    }
  }
  try {
    await updateContact(contacts);
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};

removeLastContact();
