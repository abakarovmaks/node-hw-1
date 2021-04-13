const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

function listContacts() {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.log(err);
    }
    const rawData = data.toString();
    if (!rawData) {
      process.exit(1);
    }
    const contactsList = JSON.parse(rawData);
    if (contactsList.length === 0) {
      console.log('Your list is empty');
      return;
    }
    console.table(contactsList);
  });
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
