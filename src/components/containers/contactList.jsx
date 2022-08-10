import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';
import ContactComp from '../pure/ContactComp';
import ContactForm from '../pure/forms/ContactForm';


const ContactList = () => {
    const defaultContact1 = {
        firstname : "Contact 1 - Firstname",
        lastname : "Contact 1 - Lastname",
        email : "contact1@email.com",
        connected: false
    };

    const defaultContact2 = {
        firstname : "Contact 2 - Firstname",
        lastname : "Contact 2 - Lastname",
        email : "contact2@email.com",
        connected: true
    };

    const defaultContact3 = {
        firstname : "Contact 3 - Firstname",
        lastname : "Contact 3 - Lastname",
        email : "contact3@email.com",
        connected: false
    }

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);

    function connectContact(contact){
        console.log('Change connect status:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    function removeContact(contact){
        console.log('Remove contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function addContact(contact) {
        console.log('Add contact:', contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div>            
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Firstname</th>
                        <th scope='col'>Lastname</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Connected</th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map((contact, index) => {
                        return (
                                <ContactComp key={index} contact={contact} connect={connectContact} remove={removeContact}></ContactComp>
                            )
                        }
                    )}
                </tbody>
            </table>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
};


ContactList.propTypes = {
    contacts : PropTypes.arrayOf(Contact)
};


export default ContactList;
