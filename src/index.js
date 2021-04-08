import './index.css';
import reportWebVitals from './reportWebVitals';

// import store from './redux/state'
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState());
store.subscribe(()=>renderEntireTree(store.getState()));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
