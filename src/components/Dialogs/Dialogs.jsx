import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialog} ${classes.active}`}>
                    Jhony
                </div>
                <div className={classes.dialog}>
                    Nick
                </div>
                <div className={classes.dialog}>
                    Alex
                </div>
                <div className={classes.dialog}>
                    Victor
                </div>
                <div className={classes.dialog}>
                    Ted
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Well, well, well</div>
            </div>

        </div>
    );
}

export default Dialogs;