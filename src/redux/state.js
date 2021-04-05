const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let store = {
    _state: {
        messagesPage: {
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
        },
        profilePage: {
            postsItems: [
                { id: 1, msg: "Hi world", likes: 4 },
                { id: 2, msg: "Bye world", likes: 5 },
                { id: 2, msg: "About world", likes: 11 }
            ],
            newTextValue: ''
        }
    },
    _callSubscriber(state) {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                msg: this._state.profilePage.newTextValue,
                likes: 0
            }
            if (this._state.profilePage.newTextValue.length > 0) {
                this._state.profilePage.postsItems.push(newPost);
                this._state.profilePage.newTextValue = '';
                this._callSubscriber(this._state);
            }
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newTextValue = action.newMessage;
            this._callSubscriber(this._state)
        }
        else if (action.type === ADD_NEW_MESSAGE) {
            let messageText = {
                id: 9,
                text: this._state.messagesPage.messageText,
            }
            if (this._state.messagesPage.messageText.length > 0) {
            this._state.messagesPage.messageData.push(messageText);
            this._state.messagesPage.messageText = '';
            this._callSubscriber(this._state)
            }
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.messageText = action.messageText;
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreactor = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newMessage: text
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
window.store = store;




export default store;