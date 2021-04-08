import profileReducer from './profile-reducer';
import messagesReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';


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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state)
    }
}

window.store = store;




export default store;