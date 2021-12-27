import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return <div className={classes.content}>
        <ProfileInfo />
        <MyPosts posts={props.state.posts}
            newPostText={props.state.newPostText}
            updateNewPostText={props.updateNewPostText}
            addPost={props.addPost} />
    </div>
}

export default Profile;