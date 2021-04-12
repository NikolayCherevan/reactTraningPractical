
import classes from './Profile.module.scss'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <main className={classes.main}>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </main>
  )
}


export default Profile;