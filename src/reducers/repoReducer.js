import { CLEAR_REPOS, GET_REPOS } from "../actions/repoActions";

const initialState = {
    repos_arr: [],
    isSearch:false
};

const repoReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_REPOS:
            return {...state,repos_arr:action.repos_arr,isSearch:true};
        case CLEAR_REPOS:
            return {...state,repos_arr:[],isSearch:false};
        default:
            return state;
    }
}

export default repoReducer;
