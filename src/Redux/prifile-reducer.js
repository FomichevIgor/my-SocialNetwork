const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initState = {
    
        postsData: [
            { id: '1', message: 'hello', likeCount: '15' },
            { id: '2', message: 'react', likeCount: '25' },
        ],
        newPostText: 'Your message'
    }


const profileReducer = (state = initState, action) => {
    if (action.type === 'ADD-POST') {
        let newMes = {
            id: 5,
            message: state.newPostText,
            likeCount: 0,
        };
        state.postsData.push(newMes);
        state.newPostText = '';


    } else if (action.type === "UPDATE-POST-TEXT") {
        state.newPostText = action.text;

    }
    return state;
}

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updatePostTextActionCreater = (text) => ({ type: UPDATE_POST_TEXT, text: text });
export default profileReducer;