
import classes from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <main className={classes.main}>
      <ProfileInfo />
      
      <MyPosts dispatch = {props.dispatch} newTextValue = {props.postsState.newTextValue} postsData = {props.postsState}/>
    </main>
  )
}


export default Profile;