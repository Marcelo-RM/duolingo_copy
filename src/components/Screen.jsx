import React, { Component } from 'react';

class Screen extends Component {
    render() {

        const screenStyle = {
            width: '100vw',
            height: '100vh',
            padding: '0',
            margin: '0',
            border: 'none',
        };

        return (
            <div style={screenStyle}>
               {this.props.children} 
            </div>
        );
    }
}

export default Screen;