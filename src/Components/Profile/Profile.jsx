import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    

    return (
        <div className={classes.content}>
            <ProfileInfo />
          
            <MyPosts 
            state={props.state} 
            dispatch={props.dispatch}
           
            />

            <div></div>
        </div>


    )
}
export default Profile;