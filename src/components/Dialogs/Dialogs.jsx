import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogsItem";
import s from './Dialogs.module.css';
import { addMessageCreator, updateMessageTextCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map(d =>
        <DialogItem name={ d.name } id={ d.id }/>);

    const messagesElements = props.messages.map(m =>
        <Message message={ m.message }/>);

    const onNewMessageChange = (e) => {
        const message = e.target.value;
        props.newMessageChange(message);
    };

    const onMessageSend = () => {
        props.messageSend();
    };

    return (
        <div className={ s.dialogs }>
            <div className={ s.dialogsItems }>
                { dialogsElements }
            </div>
            <div className={ s.messages }>
                { messagesElements }
                <div>
                    <textarea placeholder={'Enter message'} value={ props.newMessage } onChange={ onNewMessageChange }/>
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