import { Field } from "redux-form";
import { Textarea } from "../../../../common/FormsControls/FormsControl";
import { required,maxLengthCreator } from "../../../../utilit/validators/validator";
import classes from './AddpostForm.module.css'

const AddNewPostForm = (props) => {
    let maxLength100=maxLengthCreator(100);
     return (<form className={classes.mainBox} onSubmit={props.handleSubmit}>
 
         <div>
             <Field className={classes.textArea} name={"newPostText"} component={Textarea} validate={[required,maxLength100]} placeholder={"Post message"}/>
 
         </div>
         <div>
             <button className={classes.buttonForm}>Add</button>
         </div>
 
     </form>
     )
 }
 export default AddNewPostForm;