import { createStore } from 'redux';

const INITIAL_STATE = {
    flagSelected: 'usa',
    nCrow: 100,
    nFire: 50,
    nGems: 600,
    showChangeFlag: false,
    optionSelected: 'learn',
};

function reducer(state = INITIAL_STATE, action) {
    
    switch (action.type) {
        case "SELECT_FLAG":
            return {
                ...state,
                flagSelected: action.flagSelected,
                showChangeFlag: action.showChangeFlag,
            };
        case "TOGGLE_SELECT_FLAG":
            return {
                ...state,
                showChangeFlag: action.showChangeFlag,
            };
        case "SELECT_OPTION":
            return {
                ...state,
                optionSelected: action.optionSelected,
            }; 
        default:
            return state;
    };
}

const store = createStore(reducer);

export default store;