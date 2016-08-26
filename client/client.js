import React from 'react';
import ReactDOM from 'react-dom';
import {
    render
}
from 'react-dom';
import {
    Provider
}
from 'react-redux';
import App from '../containers/App';
import configureStore from '../redux/store';

let initialState = {
    todos: [
        {
            id: 0,
            completed: false,
            text: 'ToDos go here!'
        }
    ],
    user: {
        username: 'Eddie',
        id: 7
    }
}

let store = configureStore(initialState)

ReactDOM.render( < Provider store = {
        store
    } >
    < App / >
    < /Provider>, 
    document.getElementById('root')
);