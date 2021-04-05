
import classes from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (
        <>
            <div className={classes.info_wrapper}>
                <img alt=""  className={classes.img} />
                <div className={classes.profile_avatar}> <img alt="" src="https://static10.tgstat.ru/channels/_0/15/15e0f5c67b87b751e377b4dbb3c1dc74.jpg" /> </div>
                <div className={classes.profile_description}> 
                <h1> Cherevan K.</h1>
                <p>Date of birthday:</p>
                <p>City:</p>
                <p>Education:</p>
                <p>Web site:</p>
                 </div>
            </div>
        </>
    )
}


export default ProfileInfo;