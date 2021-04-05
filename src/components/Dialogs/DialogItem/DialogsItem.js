import classes from './../dialogs.module.scss'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <li> <NavLink className={props.isActive ? classes.active_dialog_user : ""} to={path}> {props.name} </NavLink></li>
    )
}
export default Dialog;