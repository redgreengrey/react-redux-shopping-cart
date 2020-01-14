import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import {rootLogicStore} from './redux/appStore';

ReactDOM.render(
    <Provider store={rootLogicStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.register();
