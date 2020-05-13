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
            catSelected: 'training'
        };
    };

    changeFlag = (event) => {
        let newFlag = event.target.name;
        if(!newFlag) return;

        this.setState({
            flagSelected: newFlag.toString()
        });
    };

    render = () => {
        return (
            <TopBar flagSelected={this.state.flagSelected} nCrow={this.state.nCrow}
                nFire={this.state.nFire} nGems={this.state.nGems} changeFlag={this.changeFlag}/>
        );
    };
};