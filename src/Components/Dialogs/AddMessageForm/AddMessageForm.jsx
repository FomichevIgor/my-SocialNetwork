import { Field } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControl";
import { required ,maxLengthCreator} from "../../../utilit/validators/validator";

const AddMessageForm = (props) => {
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
}
export default AddMessageForm;