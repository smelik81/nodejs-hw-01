import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found, create a new file.');
      return [];
    } else {
      console.error('Error reading file:', error);
      throw error;
    }
  }
};

console.log(await getAllContacts());
