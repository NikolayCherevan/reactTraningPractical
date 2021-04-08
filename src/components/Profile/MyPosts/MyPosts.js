import React from 'react';
import classes from './MyPosts.module.scss'
import Post from './Post/Post';
import { updateNewPostText, addPostActionCreactor } from './../../../redux/profile-reducer'

const MyPosts = (props) => {
  let postAreaField = React.createRef();

  let addPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreactor());
  }

  let onPostItemChange = () => {
    let text = postAreaField.current.value;
    props.updateNewPostText(text)
    // props.dispatch(updateNewPostText(text))
  }
  let postsElements = props.postsData.postsItems.map((item, index) => <Post key={index} mess={item.msg} likes={item.likes} />)

  return (
    <>
      <h1> My posts </h1>
      <div className="posts">
        <div className="form">
          <textarea onChange={onPostItemChange} ref={postAreaField} className={classes.text_area} value={props.newTextValue}
          />
          <button onClick={() => addPost()}> Add post </button>
          {postsElements}
        </div>
      </div>
    </>
  )
}


export default MyPosts;