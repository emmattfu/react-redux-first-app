import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./Types"

const initialState = {
    loading: false,
    alert: false
}

export function appReducer(state = initialState, action) {
    if (action.type === SHOW_LOADER) {
        return {...state, loading: true}
    } else if (action.type === HIDE_LOADER) {
        return {...state, loading: false}
    } else if (action.type === SHOW_ALERT) {
        return {...state, alert: {alert: true, text: action.payload}}
    } else if (action.type === HIDE_ALERT) {
        return {...state, alert: false}
    }

    return state
}