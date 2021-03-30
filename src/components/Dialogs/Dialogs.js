import classes from './dialogs.module.scss'


const Dialogs = (props) => {
    return (

        <div className={classes.dialogs_wrapper}>
                <ul className={classes.dialogs_sidebar}>
                    <li> <a className={classes.active_dialog_user} href="#"> mike </a></li>
                    <li> <a href="#"> bro</a></li>
                    <li> <a href="#"> kriss</a></li>
                    <li> <a href="#"> ed</a></li>
                    <li> <a href="#"> some</a></li>
                </ul>
                <ul className={classes.dialogs_sidebar}>
                    <li> wazzup</li>
                    <li> ok, thanks</li>
                    <li> u a welcome</li>
                    <li> nice</li>
                    <li> bye</li>
                </ul>
        </div>
    )
}

export default Dialogs;