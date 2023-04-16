import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import '../../../src/App.css'
const Nav = () => {

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>

        <NavLink to="/Profile" >Profile</NavLink>

      </div>

      <div className={classes.item}>

        <NavLink to="/Dialogs"  >Messages</NavLink>

      </div>

      <div className={classes.item}>

        <NavLink to="/News"  >News</NavLink>

      </div>

      <div className={classes.item}>

        <NavLink to="/Music"  >Music</NavLink>
      </div>

      <div className={classes.item}>

        <NavLink to="/Users"  >Users</NavLink>

      </div>
      


    </nav>

  )
}
export default Nav;