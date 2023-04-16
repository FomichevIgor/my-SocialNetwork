import { profileAPI, usersAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initState = {

    postsData: [
        { id: '1', message: 'The meaning of life is always there. He just needs to be found.', likeCount: '15' },
        { id: '2', message: 'Never hope that someone else will change. Changes should always start with yourself.', likeCount: '25' },
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
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: {...state.profile,photos:action.photos} }
        }

        default:
            return state;
    }
}
export const addPostActionCreater = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess=(photos)=>({type:SAVE_PHOTO_SUCCESS,photos})
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
export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file)

        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }

        });

}
export const saveProfile = (profile) =>async (dispatch,getState) => {
     const userId=getState().auth.userId;
     const response=await profileAPI.saveProfile(profile);
    
   
       
            
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(userId));
               // dispatch(savePhotoSuccess(response.data.data.photos));
            }

        

}


//export const updatePostTextActionCreater = (text) => ({ type: UPDATE_POST_TEXT, text: text });
export default profileReducer;