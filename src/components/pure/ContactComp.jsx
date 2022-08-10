import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';


const ContactComp = ({contact, connect, remove}) => {

    function connected() {
        if (contact.connected) {
            return (<i onClick={() => connect(contact)} className='bi-toggle-on' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => connect(contact)} className='bi-toggle-off' style={{color: 'grey'}}></i>)
        }

    }

    return (
        <tr className='fw-normal'>
            <th className='align-middle'>
                <span className='ms-2'>{contact.firstname}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{contact.lastname}</span>
            </td>
            <td className='align-middle'>
                <span className='ms-2'>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {connected()}
            </td>
            <td className='align-middle'>
                <i className='bi-trash' onClick={() => remove(contact)}></i>
            </td>
        </tr>
    );
};


ContactComp.propTypes = {
    contact : PropTypes.instanceOf(Contact).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComp;
