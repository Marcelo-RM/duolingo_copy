import React from 'react';
import TopBar from './components/TopBar';
import getSO from './models/device';
import FooterBar from './components/FooterBar';
import Screen from './components/Screen';
import LoadingScreen from './views/LoadingScreen';
import CenterScreen from './components/CenterScreen';
import ErrorScreen from './views/ErrorScreen';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends React.Component {
    
    render = () => {
        //Se estiver abrindo no computador exibir mensagem de suporte
        if (!getSO().isMobile) {
            return (
                <ErrorScreen title="Error" text="A Versão para computador está em desenvolvimento, se deseja visualizar o app altere para
                visualização em celular e atualize a página!" />
            )
        }
        return (
            <Provider store={store}>
                <Screen>
                    <TopBar />

                    <CenterScreen>
                        <LoadingScreen />
                    </CenterScreen>

                    <FooterBar />
                </Screen>
            </Provider>
        );
    };
};