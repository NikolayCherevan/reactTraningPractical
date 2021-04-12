import React from 'react';
import { updateNewPostText, addPostActionCreactor } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreactor());
    }
    let onPostItemChange = (text) => {
        let action = updateNewPostText(text)
        props.store.dispatch(action)
    }
    return (

        <MyPosts newTextValue={state.profilePage.newTextValue} updateNewPostText={onPostItemChange} posts={state.profilePage.postsItems} addPost={addPost} />
    )
}

export default MyPostsContainer;