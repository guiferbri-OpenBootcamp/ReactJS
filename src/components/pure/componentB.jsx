import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';


const ComponentB = ({contact}) => {
    const [connected, setstate] = useState(contact.connected);

    const setState = () => {
        setstate(!connected);
    }
    return (
        <div>
            <p>Contact: { connected ? 'Online' : 'No available' }</p>
            <button onClick={setState}>Cambiar estado</button>
        </div>
    );

};


ComponentB.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ComponentB;
