import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
    profilePage: profileReducer, messagesPage: messagesReducer, sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;