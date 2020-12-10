import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import  allReducer  from "./utils/reducers/index"
import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import './style/bundle.scss'
var store = createStore(allReducer,applyMiddleware(thunk));


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider >
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();