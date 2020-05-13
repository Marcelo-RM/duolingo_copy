import React from 'react';
import FlagButton from './FlagButton';

const SelectFlag = (props) => {

    const selectFlagStyle = {
        position: 'absolute',
        marginTop: '85px',
        border: '2px solid #ccc',
        width: '100vw',
        marginLeft: '-20px',
        overflow: 'auto',
        boxSizing: 'border-box',
        padding: '20px 10px',
        borderRadius: '5px',
    };

    const rowFlagsStyle = {
        width: 'max-content',
    };

    return (
        <div style={selectFlagStyle} className="selectFlag">
            <div style={rowFlagsStyle} className="rowFlags">
                <FlagButton image="usa" onClick={props.changeFlag} />
                <FlagButton image="spain" onClick={props.changeFlag} />
                <FlagButton image="france" onClick={props.changeFlag} />
                <FlagButton image="germany" onClick={props.changeFlag} />
                <FlagButton image="japan" onClick={props.changeFlag} />
                <FlagButton image="italy" onClick={props.changeFlag} />
                <FlagButton image="korea" onClick={props.changeFlag} />
                <FlagButton image="china" onClick={props.changeFlag} />
                <FlagButton image="netherlands" onClick={props.changeFlag} />
                <FlagButton image="brazil" onClick={props.changeFlag} />
            </div>
        </div>
    );
};

export default SelectFlag;