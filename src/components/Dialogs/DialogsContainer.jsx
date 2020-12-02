import React from 'react';
import { addMessageCreator, updateMessageTextCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        { store => {
            const dialogs = store.getState().dialogsPage.dialogs;
            const messages = store.getState().dialogsPage.messages;
            const newMessage = store.getState().dialogsPage.newMessage;

            const newMessageChange = (message) => {
                store.dispatch(updateMessageTextCreator(message));
            };

            const messageSend = () => {
                store.dispatch(addMessageCreator());
            };

            return (
                <Dialogs newMessageChange={ newMessageChange } messageSend={ messageSend } dialogs={ dialogs } messages={ messages } newMessage={ newMessage }/>
            )
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;