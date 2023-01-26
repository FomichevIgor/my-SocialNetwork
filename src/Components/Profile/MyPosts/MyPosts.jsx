import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {

    
    
    let postsElements=props.state.postsData.map(post=>{
        return  <Post message={post.message} like={post.likeCount} />})
    return (<>
    
        My post
        <div>
            <div>
                <textarea >

            </textarea>
            </div>
            <div>
                <button>Add</button>
            </div>
            
        </div>
        <div className={classes.content}>
           {postsElements}
           
        </div>

    </>



    )
}
export default MyPosts;