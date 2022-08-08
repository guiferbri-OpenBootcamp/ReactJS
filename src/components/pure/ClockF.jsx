import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const ClockF = () => {
    const initialState = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };
    const [state, setState] = useState(initialState);
    useEffect(() => {
        const intervalID = setInterval(() => {
            setState({
                fecha: new Date(),
                edad: state.edad + 1              
            })
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );
};


ClockF.propTypes = {

};


export default ClockF;
