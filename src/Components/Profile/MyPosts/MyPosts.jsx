import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreater, updatePostTextActionCreater } from "../../../Redux/prifile-reducer";
function MyPosts(props) {
   


    let postsElements = props.state.postsData.map(post => {
        return <Post message={post.message} like={post.likeCount} />
    })
    let newPostElemnt = React.createRef();
    let addPost = () => {

        
       
        props.dispatch(addPostActionCreater());

       
    }


    let onPostChange = () => {
        let text = newPostElemnt.current.value;
       
        props.dispatch(updatePostTextActionCreater(text));
    }


    return (<>

        My post
        <div>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElemnt}
                    value={props.state.newPostText}>

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