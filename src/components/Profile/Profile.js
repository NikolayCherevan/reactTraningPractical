
import classes from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'
const Profile = () => {
  return (
    <main className={classes.main}>
      <MyPosts />
    </main>
  )
}


export default Profile;