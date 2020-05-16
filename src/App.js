import React from 'react';
import TopBar from './components/TopBar';
import getSO from './models/device';
import FooterBar from './components/FooterBar';
import Screen from './components/Screen';
import LoadingScreen from './views/LoadingScreen';

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
            optionSelected: 'learn',
        };
    };

    showChangeFlag = () => {
        this.setState({
            showChangeFlag: this.state.showChangeFlag ? false : true,
        });
    }

    changeFlag = (event) => {
        let newFlag = event.target.name;
        if (!newFlag) return;

        this.setState({
            flagSelected: newFlag.toString(),
            showChangeFlag: false,
        });
    };

    changeOption = (event) => {
        let newOption = event.target.name;
        if(!newOption) return;

        this.setState({
            optionSelected: newOption,
        });
    };

    render = () => {
        //Se estiver abrindo no computador exibir mensagem de suporte
        if (!getSO().isMobile) {
            return (
                <h3>A Versão para computador está em desenvolvimento, se deseja visualizar o app altere para
                vizualação em celular e atualize a página
                </h3>
            )
        }
        return (
            <Screen>
                <TopBar flagSelected={this.state.flagSelected} nCrow={this.state.nCrow}
                    nFire={this.state.nFire} nGems={this.state.nGems} changeFlag={this.changeFlag}
                    showChangeFlag={this.state.showChangeFlag} openChangeFlag={this.showChangeFlag} />

                <LoadingScreen />

                <FooterBar optionSelected={this.state.optionSelected} optionClick={this.changeOption}/>
            </Screen>
        );
    };
};