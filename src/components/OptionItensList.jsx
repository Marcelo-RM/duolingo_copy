import React, { Component } from 'react';
import OptionItem from './OptionItem';

class OptionItensList extends Component {
    render() {
        const optionItensStyle = {
            display: 'flex',
            justifyContent: 'space-around',
        }
        return (
            <div style={optionItensStyle}>
                <OptionItem selected={true} image="learn.svg" />
                <OptionItem selected={false} image="stories.svg" />
                <OptionItem selected={false} image="discuss.svg" />
                <OptionItem selected={false} image="profile.svg" />
                <OptionItem selected={false} image="store.svg" />
            </div>
        );
    }
}

export default OptionItensList;