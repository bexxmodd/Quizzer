import {
    SIGNIN
} from '../../constants/action.type'

import {
    LOGIN_URL,
    SIGNUP_URL
} from '../../constants/api.endpoint'

import Axios from 'axios'

const signin = user => {
    return {
        type: SIGNIN,
        payload: user
    }
}


const login = (username, password) => {
    return dispatch => {
        Axios({
            url: LOGIN_URL,
            method: 'POST',
            data: {
                username: username,
                password: password
            }
        }).then(res => {
            dispatch(signin(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

const signup = (username, password) => {
    return dispatch => {
        Axios({
            url: LOGIN_URL,
            method: 'POST',
            data: {
                username: username,
                password: password
            }
        }).then(res => {
            dispatch(signin(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export { login, signup }