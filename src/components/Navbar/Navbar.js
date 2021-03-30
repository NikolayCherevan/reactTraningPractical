
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={classes.sidebar}>

      <ul className={classes.nav}>
        <li className={classes.item}><NavLink className={classes.item_link} activeClassName={classes.active} to="/profile"> home</NavLink></li>
        <li className={classes.item}><NavLink  className={classes.item_link} activeClassName={classes.active} to="/dialogs"> messages</NavLink></li>
        <li className={classes.item}><NavLink className={classes.item_link} activeClassName={classes.active} to="/news"> news</NavLink></li>
        <li className={classes.item}><NavLink className={classes.item_link} activeClassName={classes.active} to="/music"> music </NavLink></li>
        <li className={classes.item}><NavLink className={classes.item_link} activeClassName={classes.active} to="/settings"> settings </NavLink></li>
      </ul>
    </nav>

  )
}


export default Navbar;