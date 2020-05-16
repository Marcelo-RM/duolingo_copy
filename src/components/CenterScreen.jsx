import React, { Component } from 'react';

class CenterScreen extends Component {
    render() {
        const centerScreenStyle = {
            width: '100%',
            heigth: '100%',
            backgroundColor: 'white',
            height: 'calc(100vh - 114px)',
            boxSizing: 'border-box',
            overflow: 'auto',
        };
        return (
            <div style={centerScreenStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default CenterScreen;