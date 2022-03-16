import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import orgReducer from "./reducers/orgReducer";
import repoReducer from "./reducers/repoReducer";

const rootReducer = combineReducers(
    { 
        repoStore: repoReducer,
        orgStore: orgReducer
    }
);
export default createStore(rootReducer,applyMiddleware(thunk));