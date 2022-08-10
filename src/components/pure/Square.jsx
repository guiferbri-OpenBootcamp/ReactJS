import React, { useState } from 'react';
import '../../style/style.scss';


const Square = () => {
    const [color, setColor] = useState('#000000');
    const [intervalID, changeColorInterval] = useState(0);

    function generateColor() {
        return Math.floor(Math.random() * 256);
    }

    function onOver() {        
        changeColorInterval(setInterval( () => {
            const r = generateColor();
            const g = generateColor();
            const b = generateColor();

            setColor(`rgb(${r},${g},${b})`)

        },500));
    }

    function onLeave() {
        clearInterval(intervalID);
    }

    function onDoubleClick() {
        clearInterval(intervalID);
    }

    return (
        <div className='square' onMouseOver={onOver} onMouseLeave={onLeave} onDoubleClick={onDoubleClick} style={{backgroundColor : color}}>
            Hola
        </div>
    );
};

export default Square;
