import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


import App from './js/components/App.jsx';

function mainReducer(state, action) {
    console.log("main reducer-" + JSON.stringify(state));
    if (typeof state === 'undefined') {
        return 1;
    }
    switch (action.type) {
        case 'INCREMENT_MAIN':
            return state + 1;

        default:
            return state;
    }
}

function childReducer(state, action) {
    console.log("CHILD reducer-" + JSON.stringify(state));
    if (typeof state === 'undefined') {
        return 1;
    }
    switch (action.type) {
        case 'INCREMENT_CHILD':
            return state + 1;
        default:
            return state;
    }
}

const initialState = {
    mainCounter: 20,
    childCounter: 13
};

const combineReducer = combineReducers(
    {
        mainCounter: mainReducer,
        childCounter: childReducer
    });

const store = createStore(
    combineReducer, initialState
);

console.log()

function render() {
    console.log("JSON-" + JSON.stringify(store.getState()));
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('main'));
}
render();
//store.subscribe(render);

//ReactDOM.render( <App /> , document.getElementById('main'));
console.log("Hello World ..now webpack3");




