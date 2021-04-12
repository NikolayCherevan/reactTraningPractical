
import classes from './Profile.module.scss'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <main className={classes.main}>
      <ProfileInfo />
      <MyPostsContainer/>
    </main>
  )
}


export default Profile;