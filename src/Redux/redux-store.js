import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./prifile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer"
import authReducer from "./auth_reducer";
import  ThunkMiddleware  from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducers=combineReducers({
     profilePage :profileReducer,
     dialogPage :dialogsReducer,
     usersPage : usersReducer,
     auth:authReducer, 
     form:formReducer,

});

let store=createStore(reducers,applyMiddleware(ThunkMiddleware));


window.store=store




export default store;