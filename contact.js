#!/usr/bin/env node

const program = require('commander');
const { addContact, getContact } = require('./logic');


const  { prompt } = require('inquirer');
// craft user input questions to make it more friendly :)
const questions = [
  {
    type : 'input',
    name : 'firstname',
    message : 'Enter First Name - '
  },
  {
    type : 'input',
    name : 'lastname',
    message : 'Enter Last Name - '
  },
  {
    type : 'input',
    name : 'phone',
    message : 'Enter Phone Number - '
  },
  {
    type : 'input',
    name : 'email',
    message : 'Enter Email - '
  }
  ];

// basic program info
program
  .version('0.0.1')
  .description('Contact management system')

// first function that adds contacts
program
  .command('addContact <firstname> <lastname> <phone> <email>')
  .alias('-a')
  .description('Add a contact')
  .action(() =>  {
  prompt(questions).then(answers =>
                         addContact(answers));
});

program
  .command('getContact <name>')
  .alias('-r')
  .description('Get a contact that has already been added')
  .action(name => getContact(name));

program.parse(process.argv);
