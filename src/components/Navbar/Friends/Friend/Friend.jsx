import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={classes.friendItem}>
            <img src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/Image-Files-Blog-Vector.jpg' />
            <div>
                {props.friend}
            </div>
        </div>
    );
}

export default Friend;