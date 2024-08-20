/* import fs from 'node:fs/promises';

(async () => {
  try {
    const newFileText = 'Upload new  data and information';
    await fs.writeFile('file.txt', newFileText, 'utf-8');
    console.log('Data completed');

    const data = fs.readFile('file.txt', 'utf-8');
    console.log('Context at file');
  } catch (error) {
    console.error('Помилка роботи з файлом:', err);
  }
})(); */

/* import { getCurrentMonth } from './example.js';
const showCurrentMonth = getCurrentMonth();
console.log(`showCurrentMonth - ${showCurrentMonth} of this year`); */

import { PATH_DB } from './constants/contacts.js';
console.log(PATH_DB);
