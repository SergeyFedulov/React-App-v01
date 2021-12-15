import React from 'react';
import Friend from './Friend/Friend';
import classes from './Friends.module.css'

const Friends = (props) => {
    let friendsElements = props.friendsList.map((friends) => <Friend friend={friends.friend} />);
    return (
        <div>
            <div className={classes.friendsItem}>Friends</div>
            <div>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;