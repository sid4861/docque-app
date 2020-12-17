import createDataContext from './createDataContext';
import axios from '../Api/docque';
import { AsyncStorage } from 'react-native';
import { navigate } from '../../src/navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: 'check username/password' };
        case 'add_success':
            return { ...state, successMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload, loading: false };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'clear_success_message':
            return { ...state, successMessage: '' };
        case 'signout':
            return { token: null, errorMessage: '' };
        default: return state;
    }
};

const tryLocalSignin = (dispatch) => {

    return async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            dispatch({ type: 'signin', payload: token });
            navigate('TrackListScreen');
        } else {
            navigate('loginFlow');
        }
    };


};

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_error_message' });
    }
};

const clearSuccessMessage = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_success_message' });
    }
};

const signUp = (dispatch) => {
    return async ({ email, password }) => {
        try {
            navigate('LoadingScreen');
            const response = await axios.post('/signup', { email, password })
            // console.log(response.data.token);
            // console.log(response.data.localId);
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('userId', response.data.localId);
            dispatch({ type: 'signup', payload: response.data.token });
            // setTimeout(() => {
            //     navigate('UserDetailsScreen');
            // }, 4000);
            navigate('UserDetailsScreen');
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
        }
    };
};


const signIn = (dispatch) => {
    return async ({ email, password }) => {
        try {
            navigate('LoadingScreen');
            const response = await axios.post('/signin', { email, password });
            // navigate('LoadingScreen');
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('userId', response.data.userId);
            dispatch({ type: 'signin', payload: response.data.token });
            navigate('HomeScreen');
        } catch (err) {
            console.log(err);
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
            navigate('SigninScreen');
        }
    };
};

const signOut = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userId');
        dispatch({ type: 'signout' });
        navigate('loginFlow');
    };
};

const forgotPassword = (dispatch) => {
    return async ({ email }) => {
        try {
            await axios.post('/forgot-password', { email });
            dispatch({ type: 'add_success', payload: 'A password reset mail has been sent' });
            dispatch({ type: 'clear_error_message' });
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'No account with this email' });
        }
    };
};

const saveUserDetails = (dispatch) => {
    return async ({name, country, isStudent, degree}) => {
        try {
            navigate('LoadingScreen');
            const userID = await AsyncStorage.getItem('userId');
            const idToken = await AsyncStorage.getItem('token');
            const response = await axios.post('/save-details', {name, country, isStudent, degree, userID, idToken});
            navigate('HomeScreen');
        } catch(err) {
            dispatch({ type: 'add_error', payload: 'Oops! Please try again' });

        }
    }
};


export const { Context, Provider } = createDataContext(authReducer, { signUp, signIn, signOut, clearErrorMessage, tryLocalSignin, forgotPassword, clearSuccessMessage, saveUserDetails }, { token: null, errorMessage: '', loading: true, successMessage: '' });