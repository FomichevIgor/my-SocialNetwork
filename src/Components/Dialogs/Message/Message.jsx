
import classes from "./Message.module.css";

function Message(props) {
    console.log(props)
    return <div className={classes.message}>
        
        {props.message}
        
               
    </div>
}


export default Message;