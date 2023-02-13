import profileReducer from './prifile-reducer'
import dialogsReducer from './dialogs-reducer';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: '1', message: 'hello', likeCount: '15' },
                { id: '2', message: 'react', likeCount: '25' },
            ],
            newPostText: 'Your message'
        },



        dialogPage: {
            dialogData: [

                { id: '1', name: 'name1' },
                { id: '2', name: 'name2' },
                { id: '3', name: 'name3' },
                { id: '4', name: 'name4' },
            ],
            messagesData: [
                { id: '1', massege: 'hello' },
                { id: '2', massege: 'hello how are you' },
                { id: '3', massege: 'nice' },
            ], newMessageText: 'Your message',
        }
    },
    getState() {
        return this._state;
    },
    
    _rerenderTree() {
        console.log('yes');
    },

    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogPage=dialogsReducer(this._state.dialogPage,action);
        this._rerenderTree(this._state);   
    },
    subscribe(observer) {
        this._rerenderTree = observer;

    }
}
export default store;