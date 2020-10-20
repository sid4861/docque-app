import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { navigate } from '../../src/navigationRef';
import { withNavigation } from 'react-navigation';
import QuestionCardContent from './QuestionCardContent';

const QuestionCard = ({ question, name, noOfAnswers, noOfInsightfuls, tag }) => {

    const navigateToQuestionScreen = () => {
        navigate('QuestionScreen');
    }

    return (
        <TouchableOpacity onPress={() => { navigateToQuestionScreen() }}>
            <QuestionCardContent question={question}
                name={name}
                noOfAnswers={noOfAnswers}
                noOfInsightfuls={noOfInsightfuls}
                tag={tag}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    questionStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        width: 400,
        lineHeight: 24
    },
    nameStyle: {
        fontSize: 12,
        color: '#6C6C6C',
        fontWeight: 'bold'
    },
    timeStyle: {
        fontSize: 12,
        color: '#6C6C6C',
        fontWeight: 'bold'
    }
});

export default withNavigation(QuestionCard);