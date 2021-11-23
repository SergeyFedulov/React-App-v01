import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Jhony' id='1' />
                <DialogItem name='Nick' id='2' />
                <DialogItem name='Alex' id='3' />
                <DialogItem name='Victor' id='4' />
                <DialogItem name='JTed' id='5' />
            </div>
            <div className={classes.messages}>
                <Message message='Hello' />
                <Message message='How are you?' />
                <Message message='Well, well, well' />
            </div>

        </div>
    );
}

export default Dialogs;