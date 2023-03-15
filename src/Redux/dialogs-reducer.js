//actionType
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
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMes = {
                id: 5,
                massege: state.newMessageText,
            }
            return { ...state,
                messagesData:[...state.messagesData,newMes],
                newMessageText:''
            };
           
        }
        case UPDATE_MESSAGE_TEXT:
            return{ ...state,newMessageText : action.text }
            


        default:
            return state;
    }
}
export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });
export const updateMessageTextActionCreater = (text) => ({ type: UPDATE_MESSAGE_TEXT, text: text });

export default dialogsReducer;