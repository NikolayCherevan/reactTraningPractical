import { updateNewPostText, addPostActionCreactor } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state)=> {
    return {
        posts: state.profilePage.postsItems,
        newTextValue: state.profilePage.newTextValue
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onPostItemChange: (text)=> {
            let action = updateNewPostText(text)
            dispatch(action)
        },
        addPost: ()=> {
            dispatch(addPostActionCreactor());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
