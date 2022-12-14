import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';
import ContactComp from '../pure/ContactComp';
import ContactForm from '../pure/forms/ContactForm';
import ContactFormFormik from '../pure/forms/ContactFormFormik';


const ContactList = () => {
    const defaultContact1 = new Contact("Contact 1 - Firstname", "Contact 1 - Lastname", "contact1@email.com", false);
    const defaultContact2 = new Contact("Contact 2 - Firstname", "Contact 2 - Lastname", "contact2@email.com", true);
    const defaultContact3 = new Contact("Contact 3 - Firstname", "Contact 3 - Lastname", "contact3@email.com", false)

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
            {/* Ejercicio 7,8,9 */}
            {/*<ContactForm add={addContact}></ContactForm>*/}
            <ContactFormFormik add={addContact}></ContactFormFormik>
        </div>
    );
};


ContactList.propTypes = {
    contacts : PropTypes.arrayOf(Contact)
};


export default ContactList;
