import React from 'react';
import { connect } from 'react-redux';
import { selectOption } from '../store/actions';

const OptionItem = (props) => {

    const formatImageName = () => {
        return props.image.split('.svg')[0] + "-selected.svg";
    }

    const images = require.context('../assets/icons/', true);
    const imageName = props.selected ? formatImageName() : props.image;

    const optionItemStyle = {
        width: '50px',
        height: '50px',
        backgroundImage: 'url(' + images('./' + imageName) + ')',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '5px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
    };

    return (
        <button style={optionItemStyle} onClick={props.selectOption} name={props.name} >

        </button>
    );
}


function mapDispatchToProps(dispatch) {
    return {
        selectOption: event => {
            dispatch(selectOption(event.target.name));
        },
    };
}

export default connect(null, mapDispatchToProps)(OptionItem);
