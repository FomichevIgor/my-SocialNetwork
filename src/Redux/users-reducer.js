const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(item => {
                    if (item.id === action.userId) {

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
        case SET_USERS: {

            return { ...state, users: [...action.users] };


        }
        case SET_CURRENT_PAGE: {

            return { ...state, currentPage: action.currentPage };


        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count };

        };

        case TOGGLE_IS_FETCHING: {

            return { ...state, isFetching: action.isFetching }

        };
        case TOGGLE_IS_FOLLOWING_PROGRESS: {

            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }

        };

        default:

            return state;

    }

}
export const followAC = (userId) => { return { type: FOLLOW, userId } };
export const unfollowAC = (userId) => { return { type: UNFOLLOW, userId } };
export const setUsersAC = (users) => { return { type: SET_USERS, users } };
export const setCurrentPageAC = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } };
export const setTotalUsersCountAC = (totalUsersCount) => { return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount } };
export const toggleIsFetchingAC = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching } };
export const toggleFollowingProgressAC = (isFetching, userId) => { return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } };
export default usersReducer;

