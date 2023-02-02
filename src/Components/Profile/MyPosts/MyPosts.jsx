import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {



    let postsElements = props.state.postsData.map(post => {
        return <Post message={post.message} like={post.likeCount} />
    })
    let newPostElemnt = React.createRef();
    let addPost = () => {
      
        let text = newPostElemnt.current.value;
        props.addPost(text);
        newPostElemnt.current.value='';
    }
    return (<>

        My post
        <div>
            <div>
                <textarea ref={newPostElemnt}>

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