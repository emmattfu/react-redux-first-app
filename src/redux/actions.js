import { ADD_POST, GET_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./Types";

export function addPost(text) {
    return {type: ADD_POST, payload: text}
}

export function getPosts() {
    return async function(dispatch) {
        dispatch(showLoader())
        const data = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=5`)
        const json = await data.json()
        setTimeout(() => {
            dispatch({type: GET_POSTS, payload: json})
            dispatch(hideLoader())
        }, 1500)
   
    }
    
}

export function showLoader() {
    return {type: SHOW_LOADER}
}

export function hideLoader() {
    return {type: HIDE_LOADER}
}

export function showAlert(text) {
    return function(dispatch) {
        dispatch({type: SHOW_ALERT, payload: text})
        setTimeout(() => {
            dispatch(hideAlert())
        }, 1500)
    }
}

export function hideAlert() {
    return {type: HIDE_ALERT}
}