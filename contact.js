const program = require('commander');
const { addContact, getContact } = require('./logic');

program
  .version('0.0.1')
  .description('Contact management system')

program
  .command('addContact <firstname> <lastname> <phone> <email>')
  .alias('-a')
  .description('Add a contact')
  .action((firstname, lastname, phone, email) => {
    addContact({firstname, lastname, phone, email});
});
