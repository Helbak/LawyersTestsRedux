import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MainComponent from './mainComponent/MainComponent.jsx';
import allReducers from '../reducer/index.js'

const store = createStore(allReducers);


export const init = () => {
    ReactDOM.render(
        <Provider store={store}>
            <MainComponent/>
        </Provider>,
    document.getElementById('root')
    )
};
