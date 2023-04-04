const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initState = {

    postsData: [
        { id: '1', message: 'hello', likeCount: '15' },
        { id: '2', message: 'react', likeCount: '25' },
    ],
    newPostText: 'Your message',
    profile:null
}

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newMes = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            let stateCopy={...state}

            stateCopy.postsData=[...stateCopy.postsData];
            stateCopy.postsData.push(newMes)
            stateCopy.newPostText = '';
            return stateCopy;

        }
        case UPDATE_POST_TEXT:
            let stateCopy={...state}
            stateCopy.newPostText = action.text;
        return stateCopy;

        case SET_USER_PROFILE:{
            return{...state,profile:action.profile}
        }
            default:
            return state;
    }
}
    export const addPostActionCreater = () => ({ type: ADD_POST });
    export const setUserProfile=(profile)=>({type:SET_USER_PROFILE,profile});
    export const updatePostTextActionCreater = (text) => ({ type: UPDATE_POST_TEXT, text: text });
    export default profileReducer;