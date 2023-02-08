const ADD_POST='ADD-POST';
const UPDATE_POST_TEXT="UPDATE-POST-TEXT";
const  ADD_MESSAGE= 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT='UPDATE-MESSAGE-TEXT';



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
        if (action.type === 'ADD-POST') {
            let newMes = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.postsData.push(newMes);
            this._rerenderTree(this._state);
            this._state.profilePage.newPostText = '';


        } else if (action.type === "UPDATE-POST-TEXT") {
            this._state.profilePage.newPostText = action.text;
            this._rerenderTree(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMes = {
                id: 5,
                massege: this._state.dialogPage.newMessageText,
            }
            this._state.dialogPage.messagesData.push(newMes);
            this._rerenderTree(this._state);
            this._state.dialogPage.newMessageText = "";
        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.dialogPage.newMessageText = action.text;
            this._rerenderTree(this._state);

        }
    },

   


    subscribe(observer) {
        this._rerenderTree = observer;

    }

}

export const addPostActionCreater=()=>({type:ADD_POST});
export const updatePostTextActionCreater=(text)=>({type:UPDATE_POST_TEXT,text:text});
export const addMessageActionCreater=()=>({type:ADD_MESSAGE});
export const updateMessageTextActionCreater=(text)=>({type:UPDATE_MESSAGE_TEXT,text:text});



export default store;