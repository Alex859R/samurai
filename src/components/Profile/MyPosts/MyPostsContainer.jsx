import React from 'react';
import { addPostCreator, updatePostTextCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const posts = props.store.getState().profilePage.posts;
    const newPostText = props.store.getState().profilePage.newPostText;

    const updatePostText = (text) => {
        props.store.dispatch(updatePostTextCreator(text));
    };

    const addPost = () => {
        props.store.dispatch(addPostCreator());
    }

    return (
        <MyPosts updatePostText={ updatePostText } addPost={ addPost } posts={ posts } newPostText={ newPostText }/>
    )
}

export default MyPostsContainer;