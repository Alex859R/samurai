import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, updatePostText } from "./redux/state";

const renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addPost={ addPost } updatePostText={ updatePostText }/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

export default renderTree;