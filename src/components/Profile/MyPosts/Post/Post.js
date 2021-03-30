
import classes from './Post.module.scss'
const Post = (props) => {
  return (
    <>
        <div className={classes.posts__item}>
          {props.mess}
      </div>
    </>
  )
}


export default Post;