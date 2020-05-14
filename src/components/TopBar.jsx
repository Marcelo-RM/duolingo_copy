import React from 'react';
import CountItem from "./CountItem";
import FlagButton from "./FlagButton";
import crow from '../assets/icons/crown.svg';
import fire from '../assets/icons/fire.svg';
import gem from '../assets/icons/gem.svg';
import SelectFlag from './SelectFlag';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
    };

    render = () => {
        const TopBarStyle = {
            height: '40px',
            boxShadow: '0px 0px 2px 0px #afafaf',
            borderBottom: '2px solid #afafaf',
            padding: '5px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        };

        return (
            <header style={TopBarStyle}>
                {this.props.showChangeFlag &&
                    <SelectFlag changeFlag={this.props.changeFlag} />
                }

                <FlagButton image={this.props.flagSelected} onClick={this.props.openChangeFlag} />
                <CountItem count={this.props.nCrow} color="#ffc800" img={crow} />
                <CountItem count={this.props.nFire} color="#ff9600" img={fire} />
                <CountItem count={this.props.nGems} color="#fc4848" img={gem} />
            </header>
        );
    }
}