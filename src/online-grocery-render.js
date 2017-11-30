import React from 'react'
import ReactDOM from 'react-dom'
import OnlineGrocery from './online-grocery'
import store from './reducers/createStore'
import { Provider } from 'react-redux'

ReactDOM.render(
        <Provider store={store}>
            <OnlineGrocery/>
        </Provider>,
    document.body
);
