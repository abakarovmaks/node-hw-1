const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

function listContacts() {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.error(err);
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
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.error(err);
    }
    const rawData = data.toString();
    if (!rawData) {
      process.exit(1);
    }
    const contactsList = JSON.parse(rawData);
    const foundContact = contactsList.find(({ id }) => id === contactId);
    if (foundContact) {
      console.table([foundContact]);
    } else {
      process.exit(1);
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.error(err);
    }
    const rawData = data.toString();
    if (!rawData) {
      process.exit(1);
    }
    const contactsList = JSON.parse(rawData);
    const filteredContact = contactsList.filter(({ id }) => id === contactId);
    if (contactsList.length !== filteredContact) {
      fs.writeFile(contactsPath, JSON.stringify(filteredContact), (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
    }
    console.log('Ok, you are deleted your contact');
    console.table(contactsList);
  });
}

function addContact(name, email, phone) {
  // ...твой код
}
