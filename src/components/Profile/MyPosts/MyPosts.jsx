import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostCreator, updatePostTextCreator } from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements =
        props.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);


    const updatePostText = (e) => {
        const postText = e.target.value;
        props.dispatch(updatePostTextCreator(postText));
    };

    const addPost = () => {
        props.dispatch(addPostCreator());
    }

    return (
        <div className={s.postsBlock}>
            <h3>{ 'My posts' }</h3>
            <div>
                <div>
                    <textarea
                        onChange={ updatePostText }
                        value={ props.profilePage.newPostText }
                    />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;