/* import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises'; */
import updateContact from './updateContacts.js';

export const removeAllContacts = async () => {
  try {
    await updateContact([]);
    console.log('All contacts has been remove is done');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found, try another file');
    } else {
      console.error('Error moving contacts:', error);
      throw error;
    }
  }
};

removeAllContacts();
