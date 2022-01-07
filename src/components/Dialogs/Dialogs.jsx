import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements =
        props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

    let messagesElements =
        props.state.messages.map((m) => <Message message={m.message} />);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;