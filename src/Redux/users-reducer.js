const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
/*{ id: 1, followed: true, fullName: "Igor", status: 'hello am here', location: { country: "Russian", city: "Novosibirsk" } },
    { id: 2, followed: false, fullName: "Dine", status: 'hello am here', location: { country: "Usa", city: "New-york" } },
    { id: 3, followed: true, fullName: "Sem", status: 'hello am here', location: { country: "Canada", city: "Toronto" } }, */
        
let initialState = {
    users: [
    ],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,  users: state.users.map(item => {
                    if ( item.id === action.userId) { 

                        return { ...item, followed: true };
                    }
                    return item;

                })

            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(item => {
                    if (item.id === action.userId) {
                        return { ...item, followed: false };
                    }
                    return item;

                })
            }
        case SET_USERS:{
            
            return {...state, users: [/* ...state.users,*/ ...action.users] }
                

           }
            

        default:
            
            return state;
            
    }

}
export const followAC = (userId) => { return { type: FOLLOW, userId } }
export const unfollowAC = (userId) => { return { type: UNFOLLOW, userId } }
export const setUsersAC = (users) => { return { type: SET_USERS, users } }
export default usersReducer;

