import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Store from './Store';
import RootContainer from './components/containers/RootContainer';

ReactDOM.render(
    <Provider store={Store}>
        <RootContainer />
    </Provider>,
    document.getElementById("root")
);