import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={classes.posts}>
                <Post message="It's my first post" likesCount='31' />
                <Post message='Hello my friend!' likesCount='12' />
                <Post message='This new post' likesCount='3' />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;