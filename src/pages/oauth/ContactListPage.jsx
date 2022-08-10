import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactList from '../../components/containers/contactList';

const ContactListPage = () => {

    const credentials = localStorage.getItem('credentials');
    const navigate = useNavigate();

    useEffect(() => {
        if (!credentials) {
            navigate('/');
        }
    });
    return (
        <div>
            <ContactList></ContactList>
        </div>
    );
}

export default ContactListPage;
