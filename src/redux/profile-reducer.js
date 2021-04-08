const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let reduxDefaultState = {
    postsItems: [
        { id: 1, msg: "Hi world", likes: 4 },
        { id: 2, msg: "Bye world", likes: 5 },
        { id: 2, msg: "About world", likes: 11 }
    ],
    newTextValue: ''
};
const profileReducer = (state=reduxDefaultState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                msg: state.newTextValue,
                likes: 0
            }
            if (state.newTextValue.length > 0) {
                state.postsItems.push(newPost);
                state.newTextValue = '';
            }
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newTextValue = action.newMessage;
            return state;

        default:
            return state;
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
export default profileReducer;

