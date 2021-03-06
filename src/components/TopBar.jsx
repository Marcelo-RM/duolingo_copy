import React, { Component } from 'react';
import CountItem from "./CountItem";
import FlagButton from "./FlagButton";
import crow from '../assets/icons/crown.svg';
import fire from '../assets/icons/fire.svg';
import gem from '../assets/icons/gem.svg';
import SelectFlag from './SelectFlag';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

class TopBar extends Component {

    render() {

        const TopBarStyle = {
            height: '40px',
            boxShadow: '0px 0px 2px 0px #afafaf',
            borderBottom: '2px solid #afafaf',
            padding: '5px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: '0',
            backgroundColor: 'white',
        };

        return (
            <header style={TopBarStyle}>
                {this.props.showChangeFlag &&
                    <SelectFlag changeFlag={this.props.selectFlag} />
                }

                <FlagButton image={this.props.flag} onClick={() => { this.props.toggleFlag(!this.props.showChangeFlag) }} />
                <CountItem name="nCrow" color="#ffc800" img={crow} />
                <CountItem name="nFire" color="#ff9600" img={fire} />
                <CountItem name="nGems" color="#fc4848" img={gem} />
            </header>
        );
    }
};

function mapStateToProps(state, ownProps) {
    return {
        flag: state.flagSelected,
        showChangeFlag: state.showChangeFlag,
        props: ownProps,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        toggleFlag: showFlag => {
            dispatch(actions.toggleFlag(showFlag));
        },
        selectFlag: event => {
            dispatch(actions.selectFlag(event.target.name));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);