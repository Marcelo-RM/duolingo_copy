import React, { Component } from 'react';
import getSO from '../models/device';
import SadDuo from '../assets/icons/sad.svg';

class ErrorScreen extends Component {
    render() {

        const isMobile = getSO().isMobile;

        const errorScreenStyle = {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: "center",
            maxWidth: '600px',
            height: '100vh',
            margin: 'auto',
        };

        const imgStyle = {
            maxWidth: '250px',
            minWidth: '100px',
            width: '100%',
        };

        const textContainer = {
            display: 'flex',
            flexDirection: 'column',
            padding: '0px 40px',
            color: '#AFAFAF',
            font: '18px/1.6em "din-round", Helvetica, Arial, Verdana, sans-serif',
        };

        const title = {
            fontWeight: 'bolder',
            fontSize: '25px',
            marginBottom: '20px',
            color: '#3C3C3C',
        }

        return (
            <div style={errorScreenStyle}>
                <img src={SadDuo} alt="error" style={imgStyle}/>
                <div style={textContainer}>
                    <span style={title}>{this.props.title}</span>
                    <span>{this.props.text}</span>
                </div>
            </div>
        );
    }
}

export default ErrorScreen;