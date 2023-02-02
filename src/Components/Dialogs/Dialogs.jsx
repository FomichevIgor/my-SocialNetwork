import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
function Dialogs(props) {


    let dialogsElements = props.state.dialogData.map((dialog) => {
        return <DialogsItem name={dialog.name} id={dialog.id} />
    });
    let messageElements = props.state.messagesData.map(message => {
        return <Message message={message.massege} />
    })
    let newMessageElemnt = React.createRef();
    let addMessage = () => {
        let text = newMessageElemnt.current.value;
        alert(text)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}


            </div>
            <div className={classes.messages}>
                {messageElements}

            </div>
<div>
          <textarea ref={newMessageElemnt}>

          </textarea>
      </div>
      <div>
          <button onClick={addMessage}>Add</button>
      </div>
        </div>
          
    )
}
export default Dialogs;