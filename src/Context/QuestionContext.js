import createDataContext from './createDataContext';
import axios from '../Api/docque';
import { navigate } from '../../src/navigationRef';
import { AsyncStorage } from 'react-native';

const questionReducer = (state, action) => {
    switch (action.type) {
        case 'get_questions':
            // console.log('inside add_questions');
            return { ...state, questions: [...action.payload], areQuestionsLoaded: true };
        case 'get_answers':
            return { ...state, answers: [...action.payload], areAnswersLoaded: true, areCommentsLoaded: false };
        case 'current_question_id':
            return { ...state, currentQuestionId: action.payload };
        case 'set_answers_loaded':
            return { ...state, areAnswersLoaded: action.payload };
        case 'set_questions_loaded':
            return { ...state, areQuestionsLoaded: action.payload };
        case 'set_comments_loaded':
            return { ...state, areCommentsLoaded: action.payload };
        case 'questions_by_user':
            return { ...state, questionsByUser: [...action.payload], questionsByUserLoaded: true };
        case 'answers_by_user':
            return { ...state, answersByUser: [...action.payload], answersByUserLoaded: true };
        case 'get_question_by_id':
            return { ...state, question: action.payload, isQuestionLoaded: true }
        case 'get_comments_by_answer_id':
            return { ...state, comments: action.payload, areCommentsLoaded: true }
        default:
            return state;
    }
};

const getAllQuestions = (dispatch) => {
    return async (sortBy = 'mostInsightful', filterBy = 'all') => {
        try {
            console.log('getAllQuestions invoked');
            const idToken = await AsyncStorage.getItem('token');
            console.log('----------------');
            console.log(sortBy);
            console.log(filterBy);
            console.log('----------------');
            const questionsArray = await axios.get('/questions', {
                params: {
                    idToken,
                    sortBy,
                    filterBy
                }
            });
            dispatch({ type: 'get_questions', payload: questionsArray.data })
            //console.log(questionsArray.data);
        } catch (err) {
            console.log(err);
        }

    };
}

//get questions asked by a user

const getQuestionsByUser = (dispatch) => {
    return async () => {
        try {

            const idToken = await AsyncStorage.getItem('token');
            const userId = await AsyncStorage.getItem('userId');

            const questionsResponse = await axios.post('/questions', {
                idToken,
                userId
            });

            //console.log(questionsResponse.data);
            dispatch({ type: 'questions_by_user', payload: questionsResponse.data });
        } catch (err) {
            console.log(err);
        }
    }
}

//get answers posted by user

const getAnswersByUser = (dispatch) => {
    return async () => {

        console.log('inside getAnswersByUser');

        try {
            const idToken = await AsyncStorage.getItem('token');
            const userId = await AsyncStorage.getItem('userId');
            const response = await axios.get('/answers', {
                params: {
                    idToken,
                    userId
                }
            })

            dispatch({ type: 'answers_by_user', payload: response.data });

        } catch (err) {
            console.log(err);
        }
    }
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

//saving comment
const saveComment = (dispatch) => {
    return async (comment, answerId) => {
        try {
            // console.log(comment);
            // console.log(answerId);

            // call api to save comment 
            var commentObject = {};
           
            const idToken = await AsyncStorage.getItem('token');
            const userId = await AsyncStorage.getItem('userId');

            commentObject = {
                comment: comment,
                date: (Date(Date.now())).toString(),
                userId: userId
            }

            const response = await axios.post('/comment', {
                idToken,
                userId,
                comment: commentObject,
                answerId
            });
            console.log(response.data);
            setCommentsLoadedFalse();
            navigate('CommentsScreen');

        } catch (err) {
            console.log(err);
        }
    }
};

const getAllAnswers = (dispatch) => {
    return async (questionId, sortBy = 'recent') => {
        console.log(questionId);
        // dispatch({type: 'answers_loaded', payload: false});
        try {
            console.log('get all answers invoked');
            // setCommentsLoadedFalse();
            const idToken = await AsyncStorage.getItem('token');
            const answersArray = await axios.post('/answers', {
                idToken,
                questionId,
                sortBy
            });
            // console.log(answersArray.data);
            dispatch({ type: 'get_answers', payload: answersArray.data })


        } catch (err) {
            console.log(err);
        }
    }
};

//increment no of insightfuls

const incrementInsightful = (dispatch) => {
    return async (questionId) => {
        console.log('increment insightful invoked');
        console.log(questionId);
        const idToken = await AsyncStorage.getItem('token');
        try {
            const response = await axios.get('/question', {
                params: {
                    questionId,
                    idToken
                }
            });
            let numberOfInsightfuls = response.data.noOfInsightfuls;
            numberOfInsightfuls += 1;
            const incrementInsightfulResponse = await axios.post('/question/increment-insightful', {
                questionId,
                numberOfInsightfuls,
                idToken
            })
        } catch (err) {
            console.log(err);
        }
    }
};

// increment insightful / like answer (on AnswerItem component)

const incrementInsightfulForAnswer = (dispatch) => {
    return async (answerId) => {
        //console.log('increment insightful for answer invoked');
        //console.log(answerId);
        const idToken = await AsyncStorage.getItem('token');
        try {
            const response = await axios.get('/answer', {
                params: {
                    answerId,
                    idToken
                }
            });
            //console.log(response.data);
            let numberOfInsightfuls = response.data.noOfInsightfuls;
            numberOfInsightfuls += 1;
            const incrementInsightfulResponse = await axios.post('/answer/increment-insightful', {
                answerId,
                numberOfInsightfuls,
                idToken
            })

        } catch (err) {
            console.log(err);
        }
    }
}

const getQuestionById = (dispatch) => {
    return async (questionId) => {
        try {
            const idToken = await AsyncStorage.getItem('token');
            const response = await axios.get('/question', {
                params: {
                    questionId,
                    idToken
                }
            });
            dispatch({ type: 'get_question_by_id', payload: response.data });

        } catch (err) {
            console.log(err);
        }
    }
};

//get comments by answerId

const getCommentsByAnswerId = (dispatch) => {
    return async (answerId) => {
        try {
            console.log('inside getcommentsbyanswer' + answerId);
            const idToken = await AsyncStorage.getItem('token');
            const response = await axios.get('/comments', {
                params: {
                    idToken,
                    answerId
                }
            });
            dispatch({ type: 'get_comments_by_answer_id', payload: response.data });
            //console.log(response.data);
        } catch (err) {
            console.log(err);
        }

    }
}


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

const setQuestionsLoadedFalse = (dispatch) => {
    return () => {
        dispatch({ type: 'set_questions_loaded', payload: false });
    }
}

const setCommentsLoadedFalse = (dispatch) => {
    return () => {
        dispatch({ type: 'set_comments_loaded', payload: false });
    }
}


export const { Context, Provider } = createDataContext(questionReducer, { getAllQuestions, saveQuestion, getAllAnswers, saveAnswer, setCurrentQuestionId, setAnswersLoadedFalse, getQuestionsByUser, getAnswersByUser, setQuestionsLoadedFalse, incrementInsightful, getQuestionById, incrementInsightfulForAnswer, getCommentsByAnswerId, setCommentsLoadedFalse, saveComment }, { questions: [], answers: [], currentQuestionId: null, areAnswersLoaded: false, questionsByUser: [], questionsByUserLoaded: false, answersByUser: [], answersByUserLoaded: false, areQuestionsLoaded: false, question: null, isQuestionLoaded: false, comments: [], areCommentsLoaded: false });