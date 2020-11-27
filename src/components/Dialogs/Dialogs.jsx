import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogsItem";
import s from './Dialogs.module.css';
import { addMessageCreator, updateMessageTextCreator } from "../../redux/state";

const Dialogs = (props) => {
    const dialogsElements = props.dialogs.dialogs.map(d =>
        <DialogItem name={ d.name } id={ d.id }/>);
    const messagesElements = props.dialogs.messages.map(m =>
        <Message message={ m.message }/>);
    const onNewMessageChange = (e) => {
        const message = e.target.value;
        props.dispatch(updateMessageTextCreator(message));
    };
    const onMessageSend = () => {
        props.dispatch(addMessageCreator());
    };

    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={ s.messages }>
                { messagesElements }
                <div>
                    <textarea value={ props.dialogs.body } onChange={ onNewMessageChange }/>
                </div>
                <div>
                    <button onClick={ onMessageSend }>Send
                        message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;