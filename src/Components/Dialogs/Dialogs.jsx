import React from "react";
import { addMessageActionCreater, updateMessageTextActionCreater } from "../../Redux/State";
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
    let addMessages = () => {
        let text = newMessageElemnt.current.value;
       // props.addMessage(text);
        props.dispatch(addMessageActionCreater());
    }
   let updateMessageTexts=()=>{
    let text = newMessageElemnt.current.value;
        //props.updateMessageText(text);
        props.dispatch(updateMessageTextActionCreater(text));

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
          <textarea 
          onChange={updateMessageTexts} 
          ref={newMessageElemnt} 
          value={props.state.newMessageText}>

          </textarea>
      </div>
      <div>
          <button  onClick={addMessages}>Add</button>
      </div>
        </div>
          
    )
}
export default Dialogs;