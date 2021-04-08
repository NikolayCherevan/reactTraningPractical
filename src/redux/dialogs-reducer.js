const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let defaultReduxState = {
    messageData: [
        { id: 1, text: 'hi' },
        { id: 2, text: 'hi' },
        { id: 3, text: 'hi' },
        { id: 4, text: 'FFFF' }
    ],
    dialogsData: [
        { id: 1, name: 'Nik', isActive: true },
        { id: 2, name: 'Sara', isActive: false },
        { id: 3, name: 'Masha', isActive: false },
        { id: 4, name: 'Pasha', isActive: false },
    ],
    messageText: ''
};
export const messagesReducer = (state =defaultReduxState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let messageText = {
                id: 9,
                text: state.messageText,
            }
            if (state.messageText.length > 0) {
                state.messageData.push(messageText);
                state.messageText = '';
            }
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.messageText = action.messageText;
            return state;

        default:
            return state;
    }

}



export const addMessageActionCreactor = (messageText) => {
    return {
        type: ADD_NEW_MESSAGE,
        messageText: messageText
    }
}
export const updateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageText: text
    }
}
export default messagesReducer;