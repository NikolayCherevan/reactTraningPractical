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
const messagesReducer = (state = defaultReduxState, action) => {
    
    switch (action.type) {
        case ADD_NEW_MESSAGE:

        let text = state.messageText;
            {
                if(text) {

                    return {
                        ...state,
                        text: '',
                        messageData: [...state.messageData, {
                            id: 9,
                            text: text
                        }]
                    }
       
                }

            }

        case UPDATE_NEW_MESSAGE_TEXT:
            {
                return {
                    ...state,
                    messageText: action.messageText
                }
        
            }

        default:
            return state;
    }

}



export const addMessageActionCreactor = () => {
    return {
        type: ADD_NEW_MESSAGE,

    }
}
export const updateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageText: text
    }
}
export default messagesReducer;