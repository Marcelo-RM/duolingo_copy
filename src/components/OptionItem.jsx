import React, { Component } from 'react';

class OptionItem extends Component {

    formatImageName = () => {
        return this.props.image.split('.svg')[0] + "-selected.svg";
    }

    render() {
        const images = require.context('../assets/icons/', true);
        const imageName = this.props.selected ? this.formatImageName() : this.props.image;

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
            <button style={optionItemStyle}>
                
            </button>
        );
    }
}

export default OptionItem;
