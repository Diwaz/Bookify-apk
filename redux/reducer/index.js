import { combineReducers } from "redux";
import auth from "./auth";
import workflow from "./workflow";
import types from "../types";

const appReducer = combineReducers({
    auth,
    workflow

})

const rootReducer = (state, action) => {
    if (action.types == types.CLEAR_REDUX_STATE) {
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer;