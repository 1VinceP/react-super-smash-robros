import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { characterStore } from './mobx/characterStore';

import { Provider } from 'mobx-react';
import { HashRouter } from 'react-router-dom';

const stores = {
    characterStore
}

ReactDOM.render(
    <Provider {...stores}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
