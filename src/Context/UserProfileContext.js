import createDataContext from './createDataContext';
import axios from '../Api/docque';
import { navigate } from '../../src/navigationRef';
import { AsyncStorage } from 'react-native';

const userProfileReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const getUserProfileDetails = (dispatch) => {
    return async () => {
        console.log('get user profile details invoked');
        try{
            const idToken = await AsyncStorage.getItem('token');
            const userId = await AsyncStorage.getItem('userId');
            const profileResponse = await axios.post('/user', {
                idToken,
                userId
            })
            console.log(profileResponse.data);

        } catch(err){
            console.log(err);
        }
    }
}

export const { Context, Provider } = createDataContext(userProfileReducer, { getUserProfileDetails }, { profileData: null });