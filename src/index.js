import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";

const renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } dispatch={ store.dispatch.bind(store) } />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscribe(()=> renderTree(store.getState()));

renderTree(store.getState());