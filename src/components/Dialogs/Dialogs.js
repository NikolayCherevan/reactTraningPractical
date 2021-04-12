import React from 'react';
import classes from './dialogs.module.scss'
import Dialog from './DialogItem/DialogsItem'
import Message from './Message/Message'
// import { addMessageActionCreactor, updateNewMessageText } from './../../redux/dialogs-reducer'
const Dialogs = (props) => {

    let messageAreaField = React.createRef();

    let addMess = () => {
        props.addMessageActionCreactor();
    }

    let onMessageItemChange = () => {
        let text = messageAreaField.current.value;
        props.updateNewMessageText(text);
    }
    let dialogElements = props.state.dialogsData.map((item, index) => {
        return <Dialog key={index} name={item.name} id={item.id} isActive={item.isActive} />
    })
    let messageElements = props.state.messageData.map((item, index) => {
        return <Message key={index} text={item.text} />
    })

    return (

        <div className={classes.dialogs_wrapper}>
            <ul className={classes.dialogs_sidebar}>
                {dialogElements}
            </ul>
            <ul className={classes.dialogs_sidebar}>
                {messageElements}
                <textarea ref={messageAreaField} onChange={onMessageItemChange} className={classes.text_area}
                />
                <button onClick={() => addMess()}> Send message </button>

            </ul>
        </div>
    )
}

export default Dialogs;