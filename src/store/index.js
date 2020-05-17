import { createStore } from 'redux';

function reducer () {
    return {
        flagSelected: 'china',
        nCrow: 100,
        nFire: 50,
        nGems: 600,
        showChangeFlag: false,
        optionSelected: 'profile',
    };
}

const store = createStore(reducer);

export default store;