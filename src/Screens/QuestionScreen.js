import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import FloatingActionButton from '../Components/FloatingActionButton';
import { MaterialIcons } from '@expo/vector-icons';
import QuestionCard from '../Components/QuestionCard';
import { Context as QuestionContext } from '../Context/QuestionContext';
import noAnswers from '../../assets/no-answers.png';
import AnswersList from '../Components/AnswersList';
import CustomFilterIconQuestionScreen from '../Components/CustomFilterIconQuestionScreen';

const QuestionScreen = ({ navigation }) => {
    const key = navigation.getParam('key');
    const question = navigation.getParam('question');
    const name = navigation.getParam('name');
    const noOfAnswers = navigation.getParam('noOfAnswers');
    const noOfInsightfuls = navigation.getParam('noOfInsightfuls');
    const tag = navigation.getParam('tag');
    const filename = navigation.getParam('filename');
    const date = navigation.getParam('date');

    const { getAllAnswers, state, getQuestionById } = useContext(QuestionContext);

    useEffect(() => {
        getQuestionById(key);
        getAllAnswers(key);
        const listener = navigation.addListener('didFocus', () => {
            getQuestionById(key);
            getAllAnswers(key);
        });
        return () => {
            listener.remove();
        }
    }, [state.answers.length]);

    // const sortByTimeOlder = () => {

    // };

    // const sortByTimeRecent = () => {
    //     getAllAnswersAndSortByTimeRecent();
    // }

    // const sortByNoOfInsightfuls = () => {

    // }

    var answersList;
    var questionCard;
    if (state.areAnswersLoaded == true) {
        if (state.answers.length > 0) {
            answersList = <AnswersList answers={state.answers} />
        } else {
            answersList = <View style={{ marginTop: 100, flexDirection: 'column', alignItems: 'center' }} ><Image style={{ width: 350, height: 350 }} source={noAnswers} /><Text style={{ textAlign: 'center', lineHeight: 24, fontSize: 14, color: '#6C6C6C' }} > Oops! No answers for this question, add an answer by tapping on the + button below.   </Text></View>
        }
    }
    else {
        answersList = <ActivityIndicator size="large" color="#CA534C" style={{ marginTop: 48, alignSelf: 'center' }} />;
    }

    if (state.isQuestionLoaded == true) {
        questionCard = <QuestionCard
            question={question}
            name={name}
            noOfAnswers={state.question.noOfAnswers}
            noOfInsightfuls={state.question.noOfInsightfuls}
            tag={tag}
            questionId={key}
            filename={filename}
            date={date}
        />;
    }
    else {
        questionCard = <ActivityIndicator size="large" color="#CA534C" style={{ marginTop: 48, alignSelf: 'center' }} />;
    }
    return (
        <View style={styles.container} >
            {questionCard}
            <Text style={{ marginTop: 8, color: '#CA534C', alignSelf: 'center' }} > Answers </Text>

            {answersList}

            <FloatingActionButton route={'AddAnswerScreen'} params={{ questionId: key }} />
        </View>
    );
}

QuestionScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            // <View style={{ flexDirection: 'row' }} >
            //     <TouchableOpacity style={{ marginRight: 24 }} onPress={() => navigation.navigate('')}>
            //         <MaterialIcons name="sort" size={24} color="white" />
            //     </TouchableOpacity>
            // </View>
            <CustomFilterIconQuestionScreen menuStyle={{ flexDirection: 'row', marginRight: 24 }} />
        ),
        title: 'DOCQUE',
        headerStyle: {
            backgroundColor: '#CA534C'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'normal',
            alignSelf: 'center',
            letterSpacing: 8,
            fontSize: 24
        }
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default QuestionScreen;