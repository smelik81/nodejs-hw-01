import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (!Array.isArray(contacts)) {
      throw new Error('Data is not array');
    }
    return contacts.length;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found, Count - 0');
      return 0;
    } else {
      console.error('Error reading file:', error);
      throw error;
    }
  }
};

console.log(await countContacts());
