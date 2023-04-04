import classes from'./Header.module.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className={classes.header}>
           
            <img src="https://cdn-icons-png.flaticon.com/64/4260/4260116.png" alt="logo" />

            <div className={classes.login}>
                {props.isAuth?props.login: <Link path="/Login">login</Link>}
               
            </div>
        </header>
    )
}
export default Header;