import { combineReducers, createStore } from "redux";
import profileReducer from "./prifile-reducer";
import dialogsReducer from "./dialogs-reducer";



let redusers=combineReducers({
     profilePage :profileReducer,
     dialogPage :dialogsReducer, 

});

let store=createStore(redusers);






export default store;