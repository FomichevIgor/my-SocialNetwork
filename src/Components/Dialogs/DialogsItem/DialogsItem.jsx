
import classes from "./DialogsItem.module.css";
function DialogsItem(props) {
    return <div className={classes.dialog}>
        <div className={classes.name}>{props.name}</div>
    </div>
}


export default DialogsItem;