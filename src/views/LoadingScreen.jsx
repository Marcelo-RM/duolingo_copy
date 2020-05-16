import React, { Component } from 'react';
import duoTraveling from '../assets/icons/duo-traveler.svg';

class LoadingScreen extends Component {

    render() {

        const childStyle = {
            width: '300px',
            height: 'calc(100vh - 114px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
        }

        const messageStyle = {
            fontWeight: 'bolder',
            color: '#aaa',
            overflowWrap: 'break-word',
            marginTop: '20px',
            textAlign: 'center',
        };

        return (
            <div style={childStyle}>
                <img alt="loading" src={duoTraveling} />
                <span style={messageStyle}>
                    Carregando, por favor aguarde!
                </span>
            </div>
        );
    }
}

export default LoadingScreen;