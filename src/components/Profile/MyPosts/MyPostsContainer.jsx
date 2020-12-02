import React from 'react';
import { addPostCreator, updatePostTextCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return <StoreContext.Consumer>
        { store => {
            const posts = store.getState().profilePage.posts;
            const newPostText = store.getState().profilePage.newPostText;

            const updatePostText = (text) => {
                store.dispatch(updatePostTextCreator(text));
            };

            const addPost = () => {
                store.dispatch(addPostCreator());
            }
            return (
                <MyPosts updatePostText={ updatePostText } addPost={ addPost } posts={ posts } newPostText={ newPostText }/>
            )
        }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;