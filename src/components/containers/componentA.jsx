import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';
import ComponentB from '../pure/componentB';

const ComponentA = ({contact}) => {
    return (
        <div>
            <h1>Contact</h1>
            <p>{ contact.firstname }</p>
            <p>{ contact.lastname }</p>
            <p>{ contact.email }</p>
            <ComponentB contact={contact}></ComponentB>
        </div>
    );
}
ComponentA.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};
export default ComponentA;
