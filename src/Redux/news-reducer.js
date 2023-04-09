const TOGGLE_IS_FETCHING_NEWS = "TOGGLE_IS_FETCHING_NEWS";
const SET_NEWS="SET_NEWS";

let initialState = {
    news:[],
    isFetching:true
}
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING_NEWS: {

            return { ...state, isFetching: action.isFetching }

        };
        case SET_NEWS: {

            return { ...state, news: [...action.news] };


        }
    
        default:
            return state;
    }
}
export const setNews = (news) => { return { type: SET_NEWS, news } };
export const toggleIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING_NEWS, isFetching } };

export default newsReducer;