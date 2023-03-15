import classes from "./Profile.module.css";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";

function Profile(props) {
    
    

    return (
        <div className={classes.content}>
            <ProfileInfo />
          <MyPostsConteiner />
           

            <div></div>
        </div>


    )
}
export default Profile;