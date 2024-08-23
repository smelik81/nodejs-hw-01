import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const updateContact = (contacts) =>
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

export default updateContact;
