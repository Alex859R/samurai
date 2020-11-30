import React from 'react';
import { addMessageCreator, updateMessageTextCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const dialogs = props.store.getState().dialogsPage.dialogs;
    const messages = props.store.getState().dialogsPage.messages;
    const newMessage = props.store.getState().dialogsPage.newMessage;

    const newMessageChange = (message) => {
        props.store.dispatch(updateMessageTextCreator(message));
    };

    const messageSend = () => {
        props.store.dispatch(addMessageCreator());
    };

    return (
        <Dialogs newMessageChange={ newMessageChange } messageSend={ messageSend } dialogs={ dialogs } messages={ messages } newMessage={ newMessage }/>
    )
}

export default DialogsContainer;