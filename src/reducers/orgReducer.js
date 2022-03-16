import { CLEAR_ORGS, GET_ORGS } from "../actions/orgActions";

const initialState = {
    orgs_arr: [],
    isSearch:false
};

const orgReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_ORGS:
            return {...state,orgs_arr:action.orgs_arr,isSearch:true};
        case CLEAR_ORGS:
            return {...state,orgs_arr:[],isSearch:false};
        default:
            return state;
    }
}

export default orgReducer;
