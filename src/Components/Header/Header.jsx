import classes from './Header.module.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className={classes.header}>

            <img className={classes.logo} src="https://cdn-icons-png.flaticon.com/64/4260/4260116.png" alt="logo" />

            <div className={classes.login}>
                {props.isAuth ?<div className={classes.logout}> <span className={classes.loginName}>{props.login}</span>  <button className={classes.logoutButton} onClick={props.logout}>Log out</button> </div>  : <Link  to={"/login"}> <button className={classes.navLinkButton} >Login</button> </Link>}

            </div>
        </header>
    )
}
export default Header;