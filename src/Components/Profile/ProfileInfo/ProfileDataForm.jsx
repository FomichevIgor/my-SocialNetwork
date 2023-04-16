import { reduxForm ,Field} from "redux-form";
import { Input, Textarea, createField } from "../../../common/FormsControls/FormsControl";
import classes from './ProfileDataForm.module.css';


const ProfileDataForm = (props) => {
    
    return <form onSubmit={props.handleSubmit}>
        <div>
            <button className={classes.buttonPpofileSave}>save</button>

        </div>
        {console.log(props.profile.fullName)}
       
            <div>                   
                <b>Full name </b>: {createField("Full name", "fullName", [], Input)}
            </div>
       

        
            <div>
                <b>Looking for a job  </b> : {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>
        

        
            <div>
                <b>My professional skills</b>
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
        
       
            <div>
                <b>About me</b>
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
        



        { /*<div>
            <b>Contacts </b> : {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </div>*/}
    </form>
}
const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)
export default ProfileDataFormReduxForm;