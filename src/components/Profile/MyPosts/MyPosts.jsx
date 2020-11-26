import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const newPostRef = React.createRef();

    let postsElements =
        props.profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);


    const updatePostText = () => {
        const postText = newPostRef.current.value;
        props.updatePostText(postText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>{ 'My posts' }</h3>
            <div>
                <div>
                    <textarea
                        ref={ newPostRef }
                        onChange={ updatePostText }
                        value={ props.profilePage.newPostText }
                    />
                </div>
                <div>
                    <button onClick={ props.addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;