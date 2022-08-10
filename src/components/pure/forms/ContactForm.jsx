import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/Contact.class';


const ContactForm = ({add}) => {

    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            firstNameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <div>
            <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                    <input ref={firstNameRef} id='inputFirstName' type='text' className='form-control form-control-lg' required autoFocus placeholder='FirstName'/>
                    <input ref={lastNameRef} id='inputLastName' type='text' className='form-control form-control-lg' required placeholder='LastName'/>
                    <input ref={emailRef} id='inputEmail' type='email' className='form-control form-control-lg' required autoFocus placeholder='email@email.com'/>
                    
                    <button type='submit' className='btn btn-success btn-lg ms-2'>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
};


export default ContactForm;
