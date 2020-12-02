import React from 'react';
import { connect } from "react-redux";
import { addMessageCreator, updateMessageTextCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        messageSend: () => { dispatch(addMessageCreator()) },
        newMessageChange: (message) => { dispatch(updateMessageTextCreator(message)) },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;