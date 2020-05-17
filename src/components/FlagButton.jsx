import React from 'react';
import flags from '../assets/icons/flags.svg';
import flagPosition from '../models/flags';

const FlagButton = (props) => {
    // var positionY;
    var positionY = flagPosition[props.image];

    const buttonStyle = {
        width: '50px',
        height: '34px',
        backgroundImage: 'url(' + flags + ')',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '5px',
        backgroundPositionX: '0px',
        backgroundPositionY: positionY,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
    };

    return (
        <button style={buttonStyle} onClick={props.onClick} name={props.image}>
        </button>
    );
};

export default FlagButton;