import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                //isAuth: true
            }

        default:

            return state;

    }
}
export const setUserdata = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })
export const getUserdata = () => (dispatch) => {
    authAPI.me()
        .then(response => {

            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;

                dispatch(setUserdata(id, email, login, true));
            }


        });


}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {

            if (response.data.resultCode === 0) {
                dispatch(getUserdata());
            }else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));

            }
        });


}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {

            if (response.data.resultCode === 0) {
                dispatch(setUserdata(null, null, null, false));
            }
        });


}
export default authReducer;