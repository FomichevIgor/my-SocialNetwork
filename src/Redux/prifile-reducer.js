import { profileAPI, usersAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
//const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initState = {

    postsData: [
        { id: '1', message: 'hello', likeCount: '15' },
        { id: '2', message: 'react', likeCount: '25' },
    ],
    // newPostText: 'Your message',
    profile: null,
    status: '',
}

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newMes = {
                id: 5,
                message: action.newPostText,
                likeCount: 0,
            };
            let stateCopy = { ...state }

            stateCopy.postsData = [...stateCopy.postsData];
            stateCopy.postsData.push(newMes)
            stateCopy.newPostText = '';
            return stateCopy;

        }
        /* case UPDATE_POST_TEXT:
             let stateCopy={...state}
             stateCopy.newPostText = action.text;
         return stateCopy; */

        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}
export const addPostActionCreater = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)

        .then(response => {

            dispatch(setUserProfile(response.data));
        });

}


export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)

        .then(response => {

            dispatch(setStatus(response.data));
        });

}



export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)

        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }

        });

}


//export const updatePostTextActionCreater = (text) => ({ type: UPDATE_POST_TEXT, text: text });
export default profileReducer;