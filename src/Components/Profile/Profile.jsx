import classes from "./Profile.module.css";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";

function Profile(props) {



    return (
        <div className={classes.content}>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsConteiner />


            <div></div>
        </div>


    )
}
export default Profile;