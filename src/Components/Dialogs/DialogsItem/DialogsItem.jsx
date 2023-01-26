import { NavLink } from "react-router-dom";
import classes from "./DialogsItem.module.css";
function DialogsItem(props) {
    return <div className={classes.dialog}>
        <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}


export default DialogsItem;