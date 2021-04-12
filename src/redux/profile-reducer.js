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
const profileReducer = (state = reduxDefaultState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let stateCopy = { ...state }
            let newPost = {
                id: 5,
                msg: stateCopy.newTextValue,
                likes: 0
            }

            stateCopy.postsItems = [...state.postsItems]

            if (stateCopy.newTextValue.length > 0) {
                stateCopy.postsItems.push(newPost);
                stateCopy.newTextValue = '';
            } 
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state }
            stateCopy.newTextValue = action.newMessage;
            return stateCopy;
        }
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

