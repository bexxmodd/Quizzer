import {
    SIGNIN
} from '../../constants/action.type'

import {
    TOKEN,
    USERNAME
} from '../../constants/localstorage'


const initialState = {
    token: localStorage.getItem(TOKEN),
    username: localStorage.getItem(USERNAME)
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SIGNIN:
            localStorage.setItem(TOKEN, action.payload.token)
            localStorage.setItem(USERNAME, action.payload.username)
            return {
                ...state,
                token: action.payload.token,
                username: action.payload.username
            }

        default:
            return state
    }
}