import React from 'react';
import Dialogs from './Dialogs'
import { addMessageActionCreactor, updateNewMessageText } from './../../redux/dialogs-reducer'
const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;
    let addMess = () => {
        props.store.dispatch(addMessageActionCreactor());
    }
    let updateNewMessage = (text) => {
        props.store.dispatch(updateNewMessageText(text))

    }


    return (
        <Dialogs updateNewMessageText = {updateNewMessage} addMessageActionCreactor = {addMess} state = {state} />
    )
}

export default DialogsContainer;