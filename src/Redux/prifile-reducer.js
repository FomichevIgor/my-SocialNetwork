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

    switch (action.type) {
        case ADD_POST: {
            let newMes = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            };
            let stateCopy={...state}

            stateCopy.postsData=[...stateCopy.postsData];
            stateCopy.postsData.push(newMes)
            stateCopy.newPostText = '';
            return stateCopy;

        }
        case UPDATE_POST_TEXT:
            let stateCopy={...state}
            stateCopy.newPostText = action.text;
        return stateCopy;
            default:
            return state;
    }
}
    export const addPostActionCreater = () => ({ type: ADD_POST });
    export const updatePostTextActionCreater = (text) => ({ type: UPDATE_POST_TEXT, text: text });
    export default profileReducer;