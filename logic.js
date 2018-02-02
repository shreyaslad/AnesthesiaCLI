import { mongo } from 'mongoose';

const mongoose = require('mongoose');
const assert = require('assert');
mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost:27017/contact-manager');

// converts value to lowercase
function toLower(v) {
    return v.toLowerCase();
}

// Define the contact scheme layout
const contactSchema = mongoose.Schema({
    firstname: { type: String, set: toLower },
    lastname: { type: String, set: toLower },
    phone: { type: String, set: toLower },
    email: { type: String, set: toLower }
});

const Contact = mongoose.model('Contact', contactSchema);

const addContact = (Contact) => {
   Contact.create(contact, (err) => {
       assert.equal(null, err);
       console.info('New contact added successfully');
       db.disconnect();
   });
};

const getContact = (name) => {
    //Define search criteria
    const search = new RegExp(`^${name}$`, 'i');
    Contact.findOne({$or: [{firstname: search }, {lastname: search }]})
    .exec((err, contact) => {
        assert.equal(null, err);
        console.info(contact);
        console.info(`${contact.length} matches`);
        db.disconnect();
    });
};

module.exports = {
    addContact,
    getContact,
    getContactList,
    updateContact,
    deleteContact
};
