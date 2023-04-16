import React from "react";
//import { required,maxLengthCreator } from "../../utilit/validators/validator";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
//import { Textarea } from "../../common/FormsControls/FormsControl";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

function Dialogs(props) {
    let dialogsElements = props.state.dialogData.map((dialog, index) => {
        return <DialogsItem key={index} name={dialog.name} id={dialog.id} />
    });
    let messageElements = props.state.messagesData.map((message, index) => {
        return <Message key={index} message={message.massege} />
    })
    /*let newMessageElemnt = React.createRef();
     let addMessages = () => {
         let text = newMessageElemnt.current.value;
         props.addMessages(text);
 
     }
     let updateMessageTexts = () => {
         let text = newMessageElemnt.current.value;
         props.updateMessageTexts(text);
 
 
     } */

    let AddNewMessage = (values) => {
        props.addMessages(values.newMessageText)
    }

    return (<div>
            <h2 className={classes.title}>Messages</h2>
   
        <div className={classes.dialogs}>
            
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div>
                <AddMessageFormRedux onSubmit={AddNewMessage} />
            </div>
        </div>
         </div>
    )
}
/*  <textarea
            onChange={updateMessageTexts}
            ref={newMessageElemnt}
            value={props.state.newMessageText}>
        </textarea>
        onClick={addMessages}
        */
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)
/* const AddMessageForm = (props) => {
    let maxLength100=maxLengthCreator(100);
    return (<form onSubmit={props.handleSubmit}>

        <div>
            <Field component={Textarea} validate={[required,maxLength100]} name={"newMessageText"} placeholder={"Enter your message"} />

        </div>
        <div>
            <button >Send</button>
        </div>
    </form>


    )
}*/


export default Dialogs;