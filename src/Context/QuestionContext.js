import createDataContext from './createDataContext';
import axios from '../Api/docque';
import { navigate } from '../../src/navigationRef';

const authReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
};

const getAllQuestions = (dispatch) => {
    return async () => {
        try{
            const idToken = await AsyncStorage.getItem('token');
            await axios.get('/questions', {idToken});
        } catch(err){
            console.log(err);
        }
       
    };
}

export const { Context, Provider } = createDataContext(authReducer, { getAllQuestions }, { questions: [] });