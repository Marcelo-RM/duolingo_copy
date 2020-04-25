import React from 'react';
import CountItem from "./CountItem";
import FlagButton from "./FlagButton";

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
    };

    render = () => {
        const TopBarStyle = {
            height: '40px',
            boxShadow: '0px 0px 2px 0px #aaaaaa66',
            borderBottom: '2px solid #aaaaaa66',
            padding: '5px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        };

        return (
            <header style={TopBarStyle}>
                <FlagButton imageUrl={this.props.flagSelected} />
                <CountItem count={this.props.nCrow} color="orange" />
                <CountItem count={this.props.nFire} color="orangered" />
                <CountItem count={this.props.nGems} color="tomato" />
            </header>
        );
    }
}