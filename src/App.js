import React from 'react';
import TopBar from './components/TopBar';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            flagSelected: 'brazil',
            nCrow: 279,
            nFire: 39,
            nGems: 531,
            catSelected: 'training',
            showChangeFlag: false,
        };
    };

    showChangeFlag = () => {
        this.setState({
            showChangeFlag: this.state.showChangeFlag ? false : true,
        });
    }

    changeFlag = (event) => {
        let newFlag = event.target.name;
        if(!newFlag) return;

        this.setState({
            flagSelected: newFlag.toString(),
            showChangeFlag: false,
        });
    };

    render = () => {
        return (
            <TopBar flagSelected={this.state.flagSelected} nCrow={this.state.nCrow}
                nFire={this.state.nFire} nGems={this.state.nGems} changeFlag={this.changeFlag}
                showChangeFlag={this.state.showChangeFlag} openChangeFlag={this.showChangeFlag}/>
        );
    };
};