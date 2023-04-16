//actionType
const ADD_MESSAGE = 'ADD-MESSAGE';
//const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initState = {

    dialogData: [

        { id: '1', name: 'Alexander Krais' },
        { id: '2', name: 'Hamilton North' },
        { id: '3', name: 'Gabrielle Jons' },
        { id: '4', name: 'Rosemary Nathan' },
    ],
    messagesData: [
        { id: '1', massege: 'Hello how are you' },
        { id: '2', massege: 'Am fine and you' },
        { id: '3', massege: 'Nice' },
        { id: '4', massege: 'Nice a have a nice day' },


        
    ], //newMessageText: 'Your message',
}

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMes = {
                id: 5,
                massege: action.newMessageText,
            }
            return { ...state,
                messagesData:[...state.messagesData,newMes],
                //newMessageText:''
            };
           
        }
        //case UPDATE_MESSAGE_TEXT:
            //return{ ...state,newMessageText : action.text }
            


        default:
            return state;
    }
}
export const addMessageActionCreater = (newMessageText) => ({ type: ADD_MESSAGE,newMessageText });
//export const updateMessageTextActionCreater = (text) => ({ type: UPDATE_MESSAGE_TEXT, text: text });

export default dialogsReducer;