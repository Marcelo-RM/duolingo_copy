import React, { Component } from 'react';
import OptionItensList from './OptionItensList';

class FooterBar extends Component {
    render = () => {

        const footerStyle = {
            position: 'fixed',
            bottom: '0',
            height: '60px',
            width: '100vw',
            borderTop: '2px solid #afafaf',
            boxShadow: '0px 0px 2px 0px #afafaf',
        };

        return (
            <footer style={footerStyle}>
                <OptionItensList optionSelected={this.props.optionSelected} optionClick={this.props.optionClick}/>
            </footer>
        );
    }
}

export default FooterBar;