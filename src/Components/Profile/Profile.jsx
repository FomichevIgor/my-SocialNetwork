import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={classes.content}> <div> <img src="https://avatars.mds.yandex.net/i?id=7cfba74f3cb75ed85ad2b2a55b9b039436287ce4-6274710-images-thumbs&n=13" alt="" />
        </div>

            <div>ava+description</div>
            <MyPosts />
            
            <div></div>
        </div>


    )
}
export default Profile;