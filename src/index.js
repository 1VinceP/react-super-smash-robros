import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { characterStore } from './mobx/characterStore';

import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';

const stores = {
    characterStore
}

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
