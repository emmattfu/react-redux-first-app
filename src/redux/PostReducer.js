import { ADD_POST, GET_POSTS } from "./Types"

const initialState = {
    posts: [],
    fetchedPosts: []
}

export const PostReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        return {...state, posts: [...state.posts, action.payload]}
    }

    if(action.type === GET_POSTS) {
        return {...state, fetchedPosts: [...action.payload]}
    }

    return state
}