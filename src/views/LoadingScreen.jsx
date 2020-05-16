import React, { Component } from 'react';
import duoTraveling from '../assets/icons/duo-traveler.svg';

class LoadingScreen extends Component {

    render() {

        const loadingScreenStyle = {
            display: 'flex',
            width: '100%',
            heigth: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '20px 0',
            height: 'calc(100vh - 114px)',
            boxSizing: 'border-box',
        };

        const childStyle = {
            width: '300px',
            height: 'calc(100vh - 114px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }

        const messageStyle = {
            fontWeight: 'bolder',
            color: '#aaa',
            overflowWrap: 'break-word',
            marginTop: '20px',
        };

        return (
            <div style={loadingScreenStyle}>
                <div style={childStyle}>
                    <img alt="loading" src={duoTraveling} />
                    <span style={messageStyle}>
                        Carregando, por favor aguarde!
                    </span>
                </div>
            </div>
        );
    }
}

export default LoadingScreen;