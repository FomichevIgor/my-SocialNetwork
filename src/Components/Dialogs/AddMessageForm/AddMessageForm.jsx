import { Field } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControl";
import { required ,maxLengthCreator} from "../../../utilit/validators/validator";
import classes from './AddMessageForm.module.css';

const AddMessageForm = (props) => {
    let maxLength100=maxLengthCreator(100);
    return (<form className={classes.mainBox} onSubmit={props.handleSubmit}>

        <div>
            <Field className={classes.textArea} component={Textarea} validate={[required,maxLength100]} name={"newMessageText"} placeholder={"Enter your message"} />

        </div>
        <div>
            <button className={classes.buttonForm}>Send</button>
        </div>
    </form>


    )
}
export default AddMessageForm;