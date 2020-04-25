import React from 'react';
import flags from '../assets/icons/flags.svg';
import flagPosition from '../models/flags';

const FlagButton = (props) => {
    // var positionY;
    var positionY = flagPosition[props.image];
    // switch (props.image) {
    //     case 'usa':
    //         positionY = '-4px';
    //         break;
    //     case 'spain':
    //         positionY = '-44px';
    //         break;
    //     case 'french':
    //         positionY = '-84px';
    //         break;
    //     case 'germany':
    //         positionY = '-124px';
    //         break;
    //     case 'japan':
    //         positionY = '-164px';
    //         break;
    //     case 'italian':
    //         positionY = '-204px';
    //         break;
    //     case 'corean':
    //         positionY = '-244px';
    //         break;
    //     case 'chinese':
    //         positionY = '-284px';
    //         break;
    //     default:
    //         positionY = '-4px';
    //         break;
    // }

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
        <button style={buttonStyle} onClick={props.onClick}>
        </button>
    );
};

export default FlagButton;