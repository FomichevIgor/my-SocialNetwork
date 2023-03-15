import MyPosts from "./MyPosts";
import { addPostActionCreater, updatePostTextActionCreater } from "../../../Redux/prifile-reducer";
import { connect } from "react-redux";
/*function MyPostsConteiner(props) {

    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    }

    let onPostChange = (text) => {
        let action = updatePostTextActionCreater(text);
        props.store.dispatch(action);
    }

    return (<>

        <MyPosts addPost={addPost} onPostChange={onPostChange}
            posts={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}

        />
    </>
    )
} */


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        onPostChange: (text) => {
            let action = updatePostTextActionCreater(text);
            dispatch(action);
        }
    }

}


const MyPostsConteiner = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsConteiner;