import React from "react";

import { Provider } from 'react-redux';

//import thunk from "redux-thunk";

import Index from './pages/index.js';

import store from './redux/store';

export default function App() {
    return (
        <Provider store={store}>
            <Index/>
        </Provider>
    );
}
