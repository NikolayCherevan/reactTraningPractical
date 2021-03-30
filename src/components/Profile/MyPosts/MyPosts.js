
import classes from './MyPosts.module.scss'
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <>
      <h1> My posts </h1>
      <div className="posts">
        <div className="form">
          <textarea  className ={classes.text_area} placeholder="Search..."
            defaultValue="Write someone..." />
          <button> Add post </button>
          <Post mess = "hey i am first"/>
          <Post mess = "hey i am second"/>

        </div>
      </div>
    </>
  )
}


export default MyPosts;