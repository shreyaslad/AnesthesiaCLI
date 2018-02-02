const program = require('commander');
const { addContact, getContact } = require('./logic');

// basic program info
program
  .version('0.0.1')
  .description('Contact management system')

// first function that adds contacts
program
  .command('addContact <firstname> <lastname> <phone> <email>')
  .alias('-a')
  .description('Add a contact')
  .action((firstname, lastname, phone, email) => {
    addContact({firstname, lastname, phone, email});
});

program
  .command('getContact <name>')
  .alias('-r')
  .description('Get a contact that has already been added')
  .action(name => getContact(name));

program.parse(process.argv);
