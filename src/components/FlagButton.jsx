import React from 'react';

const FlagButton = (props) => {
    const igmUrl = props.igmUrl
    const buttonStyle = {
        width: '50px',
        height: '30px',
        backgroundImage: igmUrl,
        backgroundColor: 'transparent',
        border: '1px solid #aaa',
        borderRadius: '5px',
    };

    return (
        <button style={buttonStyle} onClick={props.onClick}>
        </button>
    );
};

export default FlagButton;