import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Post key={ p.id } message={p.message} likesCount={p.likesCount}/>);


    const onPostTextUpdate = (e) => {
        const postText = e.target.value;
        props.updatePostText(postText);
    };

    const onAddPost = () => {
        props.addPost();
    }

    return (
        <div className={s.postsBlock}>
            <h3>{ 'My posts' }</h3>
            <div>
                <div>
                    <textarea
                        onChange={ onPostTextUpdate }
                        value={ props.newPostText }
                    />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;