import { createStore } from 'redux';

function reducer () {
    return {
        flagSelected: 'china',
        nCrow: 100,
        nFire: 50,
        nGems: 600,
        catSelected: 'training',
        showChangeFlag: false,
        optionSelected: 'learn',
    };
}

const store = createStore(reducer);

export default store;