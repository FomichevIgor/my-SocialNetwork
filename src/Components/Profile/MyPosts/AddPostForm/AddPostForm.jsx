import { Field } from "redux-form";
import { Textarea } from "../../../../common/FormsControls/FormsControl";
import { required,maxLengthCreator } from "../../../../utilit/validators/validator";


const AddNewPostForm = (props) => {
    let maxLength100=maxLengthCreator(100);
     return (<form onSubmit={props.handleSubmit}>
 
         <div>
             <Field name={"newPostText"} component={Textarea} validate={[required,maxLength100]} placeholder={"Post message"}/>
 
         </div>
         <div>
             <button>Add</button>
         </div>
 
     </form>
     )
 }
 export default AddNewPostForm;