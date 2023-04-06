import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utilit/validators/validator";
import { Textarea } from "../../../common/FormsControls/FormsControl";
import AddNewPostForm from "./AddPostForm/AddPostForm";

function MyPosts(props) {
    

    let postsElements = props.posts.map((post, index) => {
        return <Post key={index} message={post.message} like={post.likeCount} />
    })
    //let newPostElemnt = React.createRef();
    /*
   // let addPost = () => {
        props.addPost();
    //}

    let onPostChange = () => {
        let text = newPostElemnt.current.value;
        props.onPostChange(text);
    } */

    let addPost = (values) => {
        props.addPost(values.newPostText)

    }
    /* <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElemnt}
                    value={props.newPostText}>
                </textarea>
            </div>
            <div>
                <button onClick={addPost}>Add</button>
            </div> */
    return (<>
        My post
        <div>
            <AddNewPostFormRedux onSubmit={addPost}  />

        </div>
        <div className={classes.content}>
            {postsElements}
        </div>
    </>
    )
}
/*
const AddNewPostForm = (props) => {
   let maxLength100=maxLengthCreator(100);
    return (<form onSubmit={props.handleSubmit}>

        <div>
            <Field name={"newPostText"} component={Textarea} validate={[required,maxLength100]} placeholder={"Post message"}/>

        </div>
        <div>
            <button>Add</button>
        </div>

    </form>
    )
}
*/

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);
export default MyPosts;