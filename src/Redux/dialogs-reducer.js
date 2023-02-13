const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initState = {
    
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

const dialogsReducer = (state = initState, action) => {
    if (action.type === 'ADD-MESSAGE') {
        let newMes = {
            id: 5,
            massege: state.newMessageText,
        }
        state.messagesData.push(newMes);

        state.newMessageText = "";
    } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
        state.newMessageText = action.text;


    }

    return state;
}

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreater = (text) => ({ type: UPDATE_MESSAGE_TEXT, text: text });

export default dialogsReducer;