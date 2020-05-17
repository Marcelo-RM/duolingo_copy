import React from 'react';
import { connect } from 'react-redux';

const CountItem = ({ count, props }) => {

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
            <img width='30px' height='30px' src={props.img} alt="count" />
            <span style={textStyle}>{count}</span>
        </div>
    );
};

export default connect((state, ownProps) => ({ count: state[ownProps.name], props: ownProps }))(CountItem);