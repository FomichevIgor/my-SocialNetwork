import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className={classes.header}>

            <img src="https://cdn-icons-png.flaticon.com/64/4260/4260116.png" alt="logo" />

            <div className={classes.login}>
                {props.isAuth ?<div>{props.login} <button onClick={props.logout}>Log out</button> </div>  : <NavLink path={"/login"}>login</NavLink>}

            </div>
        </header>
    )
}
export default Header;