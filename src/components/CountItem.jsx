import React from 'react';

const CountItem = (props) => {

    const color = props.color;

    const countItemStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };
    const textStyle = {
        fontWeight: 'bolder',
        marginLeft: '5px',
        color: color
    }

    return (
        <div style={countItemStyle}>
            <img width='30px' height='30px' src={props.img} />
            <span style={textStyle}>{props.count}</span>
        </div>
    );
};

export default CountItem;