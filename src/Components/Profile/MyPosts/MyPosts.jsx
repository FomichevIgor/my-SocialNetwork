import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
    let postsElements = props.posts.map((post,index) => {
        return <Post key={index} message={post.message} like={post.likeCount} />
    })
    let newPostElemnt = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElemnt.current.value;
        props.onPostChange(text);
    }
    return (<>
        My post
        <div>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElemnt}
                    value={props.newPostText}>
                </textarea>
            </div>
            <div>
                <button onClick={addPost}>Add</button>
            </div>
        </div>
        <div className={classes.content}>
            {postsElements}
        </div>
    </>
    )
}
export default MyPosts;