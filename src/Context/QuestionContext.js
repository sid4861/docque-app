import createDataContext from './createDataContext';
import axios from '../Api/docque';
import { navigate } from '../../src/navigationRef';
import { AsyncStorage } from 'react-native';

const questionReducer = (state, action) => {
    switch (action.type) {
        case 'get_questions':
            // console.log('inside add_questions');
            return { ...state, questions: [...action.payload] };
        case 'get_answers':
            return { ...state, answers: [...action.payload], areAnswersLoaded: true };
        case 'current_question_id':
            return { ...state, currentQuestionId: action.payload };
        case 'set_answers_loaded':
            return {...state, areAnswersLoaded: action.payload};
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
    return async (question, tag, filename) => {
        try {
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
        } catch (err) {
            console.log(err);
        }
    };
};

const saveAnswer = (dispatch) => {
    return async (answer, questionId) => {
        try {
            console.log(questionId);
            console.log('save answer invoked');
            console.log('----------');
            console.log(answer);
            console.log('----------');

            const idToken = await AsyncStorage.getItem('token');
            const userId = await AsyncStorage.getItem('userId');

            const response = await axios.post('/answer', {
                answer,
                questionId,
                noOfInsightfuls: 0,
                idToken,
                userId,
                date: (Date(Date.now())).toString()
            })

            navigate('QuestionScreen');
            console.log(response.data);

        } catch (err) {
            console.log(err);
        }
    }
}

const getAllAnswers = (dispatch) => {
    return async (questionId, sortBy='mostInsightful') => {
        console.log(questionId);
        // dispatch({type: 'answers_loaded', payload: false});
        try {
            console.log('get all answers invoked');
            const idToken = await AsyncStorage.getItem('token');
            const answersArray = await axios.post('/answers', {
                idToken,
                questionId,
                sortBy
            });
            //    console.log(answersArray.data);
            dispatch({ type: 'get_answers', payload: answersArray.data })


        } catch (err) {
            console.log(err);
        }
    }
};

//to set question id of question current on screen (QuestionScreen.js Component)

const setCurrentQuestionId = (dispatch) => {
    return (questionId) => {
        dispatch({ type: 'current_question_id', payload: questionId });
    }
}

const setAnswersLoadedFalse = (dispatch) => {
    return () => {
        dispatch({ type: 'set_answers_loaded', payload: false });
    }
}



export const { Context, Provider } = createDataContext(questionReducer, { getAllQuestions, saveQuestion, getAllAnswers, saveAnswer, setCurrentQuestionId, setAnswersLoadedFalse, }, { questions: [], answers: [], currentQuestionId: null, areAnswersLoaded: false });