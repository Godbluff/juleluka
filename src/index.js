import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Calendar from './Calendar';

const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Calendar />
    </Provider>,
    document.getElementById('root')
);