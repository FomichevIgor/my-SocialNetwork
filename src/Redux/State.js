import { rerenderTree } from "../render";


let state = {
    profilePage: {
        postsData: [
            { id: '1', message: 'hello', likeCount: '15' },
            { id: '2', message: 'react', likeCount: '25' },
        ]
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
        ]
    }
}
export let addPost=(postMessage)=>{
    let newMes={
        id:5,
        message:postMessage,
        likeCount:0,
    };
    state.profilePage.postsData.push(newMes);
    
   rerenderTree(state);
}
export default state;