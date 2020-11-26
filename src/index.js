import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/state";

const renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addPost={ store.addPost.bind(store) } updatePostText={ store.updatePostText.bind(store) }/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

store.subscribe(renderTree);

renderTree(store.state);