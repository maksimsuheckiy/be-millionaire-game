import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './app/App';
import {Provider} from "react-redux";
import {setupStore} from "./app/store/store";
import {BrowserRouter} from "react-router-dom";

const store = setupStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);