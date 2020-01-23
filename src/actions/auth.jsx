import axios from 'axios';
import {
    LOGIN, LOGOUT, LOADING_UI,
    UNLOADING_UI,
    UNSET_ERRORS,
    SET_ERRORS,
    SET_USER,
} from './constants'


export const login = () => ({
    type: LOGIN,
});

export const loading = () => ({
    type: LOADING_UI,
});

export const unLoading = () => ({
    type: UNLOADING_UI,
})

export const setErrors = (error) => ({
    type: SET_ERRORS,
    error
});

export const unsetErrors = () => ({
    type: UNSET_ERRORS,
});

export const setUser = (user) => ({
    type: SET_USER,
    user
});


export const logout = () => ({
    type: LOGOUT
});




export const startSignUp = (newUser) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            console.log({ ...newUser })
            const res = await axios.post('', newUser);
            console.log(res.data)
            setAuthorizationHeader(res.data.token);
            dispatch(setUser(res.data.data));
            saveUserToLocalStorage(res.data.data);
            dispatch(login());
        }
        catch (error) {
            dispatch(setErrors(
                error.response ? (error.response.data.general || error.response.data.email || error.response.data.password || error.response.data.error || error.response.data.handle) : ''
            ))
        }
    }
}


export const startLogin = (newUser) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            console.log({ ...newUser })
            const res = await axios.post('', newUser);
            console.log(res.data)
            setAuthorizationHeader(res.data.token);
            dispatch(setUser(res.data.data));
            saveUserToLocalStorage(res.data.data);
            dispatch(login());
        }
        catch (error) {
            dispatch(setErrors(
                error.response ? error.response.data.message : ''
            ))
        }
    }
}


export const saveUserToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('user', serializedState)
    } catch (e) {
        console.log(e)
    }
}

export const startLogout = () => {
    return (dispatch) => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['x-access-token'];
        dispatch(logout());
    };
};


export const setAuthorizationHeader = (token) => {
    const FBIdToken = `${token}`;
    localStorage.setItem('token', FBIdToken);
    axios.defaults.headers.common['x-access-token'] = FBIdToken;
};