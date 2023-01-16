import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
    return (<>
        My post
        <div>
            <textarea >

            </textarea>
            <button>Add</button>
        </div>
        <div className={classes.content}>
            <Post message="hello" like='15' />
            <Post message="React" like='20' />
        </div>

    </>



    )
}
export default MyPosts;