import createDataContext from './createDataContext';
import axios from '../Api/docque';
import { navigate } from '../../src/navigationRef';
import { AsyncStorage } from 'react-native';

const questionReducer = (state, action) => {
    switch (action.type) {
        case 'get_questions':
           // console.log('inside add_questions');
            return { ...state, questions: [...action.payload] };
        default:
            return state;
    }
};

const getAllQuestions = (dispatch) => {
    return async () => {
        try {
            console.log('getAllQuestions invoked');
            const idToken = await AsyncStorage.getItem('token');
            const questionsArray = await axios.get('/questions', {
                params: {
                    idToken
                }
            });
            dispatch({ type: 'get_questions', payload: questionsArray.data })
            //console.log(questionsArray.data);
        } catch (err) {
            console.log(err);
        }

    };
}

const saveQuestion = (dispatch) => {
    return async(question, tag, filename) => {
        try{    
            console.log('save question invoked');
            const idToken = await AsyncStorage.getItem('token');
            const userId = await AsyncStorage.getItem('userId');
            const response = await axios.post('/question', {
                    idToken,
                    question,
                    tag,
                    filename,
                    userId,
                    noOfAnswers: 0,
                    noOfInsightfuls: 0,
                    date: (Date(Date.now())).toString()
            })
            navigate('HomeScreen');
        } catch(err){
            console.log(err);
        }
    };
};

export const { Context, Provider } = createDataContext(questionReducer, { getAllQuestions, saveQuestion }, { questions: [] });