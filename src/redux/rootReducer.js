import { combineReducers } from "redux";
import { PostReducer } from "./PostReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
    posts: PostReducer,
    app: appReducer
})