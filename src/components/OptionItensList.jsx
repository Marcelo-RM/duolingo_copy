import React, { Component } from 'react';
import OptionItem from './OptionItem';

class OptionItensList extends Component {

    isSelected = (nome) => {
        return this.props.optionSelected === nome;
    }
    render() {
        const optionItensStyle = {
            display: 'flex',
            justifyContent: 'space-around',
        }
        return (
            <div style={optionItensStyle}>
                <OptionItem optionClick={this.props.optionClick} selected={this.isSelected('learn')} name="learn" image="learn.svg" />
                <OptionItem optionClick={this.props.optionClick} selected={this.isSelected('stories')} name="stories" image="stories.svg" />
                <OptionItem optionClick={this.props.optionClick} selected={this.isSelected('discuss')} name="discuss" image="discuss.svg" />
                <OptionItem optionClick={this.props.optionClick} selected={this.isSelected('profile')} name="profile" image="profile.svg" />
                <OptionItem optionClick={this.props.optionClick} selected={this.isSelected('store')} name="store" image="store.svg" />
            </div>
        );
    }
}

export default OptionItensList;