import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import './css/index.scss';
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

require('array-includes').shim();

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
}

render(Root);

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        const NextRoot = require('./components/Root').default;
        render(NextRoot);
    });
}